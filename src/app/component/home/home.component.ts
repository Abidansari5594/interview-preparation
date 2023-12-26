import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { SharedScrollService } from '../../services/shared-scroll.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      state('out', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition('in => out', animate('200ms ease-out')),
      transition('out => in', animate('200ms ease-in'))
    ])
  ]
})
export class HomeComponent implements AfterViewInit{
  featuredArray: Array<any> = [];
  normalHeaderPostArray: Array<any> = [];
  bigFeaturePost: any;
  currentIndex = 0;
  displayedPosts: any[] = [];
  animationState = 'in'; // Initial animation state

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private postService: PostsService,
    private sharedScrollService: SharedScrollService,
  ) {}

  activeTab: string = 'frontend'; // Default active tab

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  ngOnInit() {
    AOS.init();
    this.postService.loadNormalHeaderPost().subscribe(val => {
      console.log(val);
      this.normalHeaderPostArray = val;

      // Initialize the first post
      if (this.normalHeaderPostArray.length > 0) {
        this.displayedPosts.push(this.normalHeaderPostArray[this.currentIndex]);
        this.scheduleNextPost();
      }
    });

    this.sharedScrollService.scrollEvent.subscribe(() => {
      this.scrollToTrending();
    });

    this.postService.loadFeaturedData().subscribe((val) => {
      this.bigFeaturePost = val[val.length - 1];
      this.featuredArray = val.filter((data: any) => data !== this.bigFeaturePost);
    });
  }

  scheduleNextPost() {
    setTimeout(() => {
      this.animationState = 'out'; // Trigger the animation
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.normalHeaderPostArray.length;
        this.displayedPosts = [this.normalHeaderPostArray[this.currentIndex]];
        this.animationState = 'in'; // Reset the animation state
        this.scheduleNextPost();
      }, 200); // Use the same duration as in your animation trigger
    }, 4000);
  }

  scrollToTrending() {
    const trendingSection = this.el.nativeElement.querySelector('#trendingSection');
    if (trendingSection) {
      trendingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngAfterViewInit() {
    AOS.init();
  }
}
