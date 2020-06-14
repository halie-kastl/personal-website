import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "web";
  linkedin = `https://www.linkedin.com/in/halie-kastl/`;
  github = `https://github.com/halie-kastl?tab=overview&from=2020-06-01&to=2020-06-11`;
  showNex = false;
  showSlalom = false;

  constructor(@Inject(DOCUMENT) document) {}

  ngOnInit() {
    // TODO MAKE JQUERY WORK
    // var controller = new scrollmagic.ScrollMagic.Controller();
    // var startLocation = document.getElementById("work").getBoundingClientRect()
    //   .top;
    // var tween = TweenMax.to("#target", 1, {
    //   rotation: 360,
    //   ease: Linear.easeNone,
    // });
    // // create a scene
    // new scrollmagic.ScrollMagic.Scene({
    //   duration: 400, // the scene should last for a scroll distance of 100px
    //   offset: startLocation, // start this scene after scrolling for 50px
    // })
    //   .setPin("work") // pins the element for the the scene's duration
    //   .setTween(tween)
    //   .addTo(controller); // assign the scene to the controller
  }

  smoothScroll(elementId) {
    var MIN_PIXELS_PER_STEP = 16;
    var MAX_SCROLL_STEPS = 30;
    var target = document.getElementById(elementId);
    var scrollContainer = target;
    do {
      scrollContainer = scrollContainer.parentElement as HTMLElement;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop === 0);

    var targetY = 0;
    do {
      if (target === scrollContainer) break;
      targetY += target.offsetTop;
    } while ((target = target.offsetParent as HTMLElement));

    var pixelsPerStep = Math.max(
      MIN_PIXELS_PER_STEP,
      Math.abs(targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS
    );

    var isUp = targetY < scrollContainer.scrollTop;

    var stepFunc = function () {
      if (isUp) {
        scrollContainer.scrollTop = Math.max(
          targetY,
          scrollContainer.scrollTop - pixelsPerStep
        );
        if (scrollContainer.scrollTop <= targetY) {
          return;
        }
      } else {
        scrollContainer.scrollTop = Math.min(
          targetY,
          scrollContainer.scrollTop + pixelsPerStep
        );

        if (scrollContainer.scrollTop >= targetY) {
          return;
        }
      }

      window.requestAnimationFrame(stepFunc);
    };

    window.requestAnimationFrame(stepFunc);
  }
}
