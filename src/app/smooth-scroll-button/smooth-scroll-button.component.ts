import { Component, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-smooth-scroll-button",
  templateUrl: "./smooth-scroll-button.component.html",
  styleUrls: ["./smooth-scroll-button.component.scss"],
})
export class SmoothScrollButtonComponent {
  title = "web";

  constructor(@Inject(DOCUMENT) document) {}

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
