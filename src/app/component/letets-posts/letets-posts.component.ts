import { Component, ElementRef, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { SharedScrollService } from '../../services/shared-scroll.service';

@Component({
  selector: 'app-letets-posts',
  templateUrl: './letets-posts.component.html',
  styleUrl: './letets-posts.component.css'
})
export class LetetsPostsComponent  implements OnInit{

  letestAerray:Array<any>=[]

  constructor(private postService:PostsService,private el: ElementRef,
    private sharedScrollService: SharedScrollService){}


  socialIconsData = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    // ... more social icons data
  ];
  isSocialIconsVisible: any = {};
  toggleSocialIcons(id: number) {
    this.isSocialIconsVisible[id] = !this.isSocialIconsVisible[id];
  }

  ngOnInit() {
    this.postService.loadLetestPosts().subscribe(val=>{
      this.letestAerray=val
    })

    this.sharedScrollService.letestSection.subscribe(() => {
      setTimeout(()=>{
        this.scrollToLetest();
      })
    });

  }


  scrollToLetest() {
    const LetestPosts = this.el.nativeElement.querySelector('#LetestPosts');
    if (LetestPosts) {
      LetestPosts.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  

}
