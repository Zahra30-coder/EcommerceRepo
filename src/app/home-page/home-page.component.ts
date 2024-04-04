import { Component, OnInit, ViewChild } from '@angular/core';
import { EcomService } from '../service/ecom.service';
import { product } from '../datatype';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomeComponent implements OnInit {

  popularProducts: product[] | undefined;
  trendyProducts: product[] | undefined;

  constructor(private service: EcomService, config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    // this.service.popularProducts().subscribe((data: product[] | undefined) => {
    //   this.popularProducts = data;
    // });

    this.service.trendyProducts().subscribe((data: product[] | undefined) => {
      this.trendyProducts = data;
    });
  }

  cas = [1, 2, 3, 5, 6].map((n) => `assets/ca${n}.jpg`);

  paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

	@ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}

	// =========================================================

	prod_img: string[] = [
		'p1.jpg',
		'p2.jpg',
		'p3.jpg',
		'p4.jpg',
		'p5.jpg',
		'p6.jpg',
		'p7.jpg',
		'p8.jpg'
	
	];

	// =========================       VIDEO CONTROLS       ======================

	  pauseVideo(videoSrc: string) {
		const video = document.querySelector('video');
		if (video) {
		  video.pause();
		  console.log('Video source:', videoSrc);
		}
	}
}
