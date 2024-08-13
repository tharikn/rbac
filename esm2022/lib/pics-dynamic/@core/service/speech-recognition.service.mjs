import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import * as i0 from "@angular/core";
export class SpeechRecognitionService {
    zone;
    speechRecognition;
    constructor(zone) {
        this.zone = zone;
        // This is intentional
    }
    record() {
        return new Observable(observer => {
            const { webkitSpeechRecognition } = window;
            this.speechRecognition = new webkitSpeechRecognition();
            this.speechRecognition.continuous = true;
            this.speechRecognition.lang = 'en-us';
            this.speechRecognition.maxAlternatives = 1;
            this.speechRecognition.onresult = speech => {
                let term = '';
                if (speech.results) {
                    const result = speech.results[speech.resultIndex];
                    const transcript = result[0].transcript;
                    if (result.isFinal) {
                        term = _.trim(transcript);
                        console.log('Did you said? -> ' + term + ' , If not then say something else...');
                    }
                }
                this.zone.run(() => {
                    observer.next(term);
                });
            };
            this.speechRecognition.onerror = error => {
                observer.error(error);
            };
            this.speechRecognition.onend = () => {
                observer.complete();
            };
            this.speechRecognition.start();
            console.log('Say something - We are listening !!!');
        });
    }
    destroySpeechObject() {
        if (this.speechRecognition) {
            this.speechRecognition.stop();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SpeechRecognitionService, deps: [{ token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SpeechRecognitionService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SpeechRecognitionService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.NgZone }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlZWNoLXJlY29nbml0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0Bjb3JlL3NlcnZpY2Uvc3BlZWNoLXJlY29nbml0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOztBQVE1QixNQUFNLE9BQU8sd0JBQXdCO0lBR2Y7SUFGcEIsaUJBQWlCLENBQU07SUFFdkIsWUFBb0IsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFDN0Isc0JBQXNCO0lBQ3pCLENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLFVBQVUsQ0FBUyxRQUFRLENBQUMsRUFBRTtZQUN2QyxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsR0FBa0IsTUFBTyxDQUFDO1lBQzNELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUM7WUFDdkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDekMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7WUFDdEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7WUFFM0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsRUFBRTtnQkFDekMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNkLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtvQkFDbEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ2xELE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7b0JBQ3hDLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTt3QkFDbEIsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxHQUFHLHNDQUFzQyxDQUFDLENBQUM7cUJBQ2xGO2lCQUNGO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtvQkFDakIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUM7WUFFRixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxFQUFFO2dCQUN2QyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFO2dCQUNsQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzt3R0EvQ1Usd0JBQXdCOzRHQUF4Qix3QkFBd0I7OzRGQUF4Qix3QkFBd0I7a0JBRHBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbnRlcmZhY2UgSVdpbmRvdyB7XHJcbiAgd2Via2l0U3BlZWNoUmVjb2duaXRpb246IGFueTtcclxuICBTcGVlY2hSZWNvZ25pdGlvbjogYW55O1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTcGVlY2hSZWNvZ25pdGlvblNlcnZpY2Uge1xyXG4gIHNwZWVjaFJlY29nbml0aW9uOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lKSB7XHJcbiAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbFxyXG4gIH1cclxuXHJcbiAgcmVjb3JkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8c3RyaW5nPihvYnNlcnZlciA9PiB7XHJcbiAgICAgIGNvbnN0IHsgd2Via2l0U3BlZWNoUmVjb2duaXRpb24gfSA9IDxJV2luZG93Pig8YW55PndpbmRvdyk7XHJcbiAgICAgIHRoaXMuc3BlZWNoUmVjb2duaXRpb24gPSBuZXcgd2Via2l0U3BlZWNoUmVjb2duaXRpb24oKTtcclxuICAgICAgdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5jb250aW51b3VzID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5sYW5nID0gJ2VuLXVzJztcclxuICAgICAgdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5tYXhBbHRlcm5hdGl2ZXMgPSAxO1xyXG5cclxuICAgICAgdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5vbnJlc3VsdCA9IHNwZWVjaCA9PiB7XHJcbiAgICAgICAgbGV0IHRlcm0gPSAnJztcclxuICAgICAgICBpZiAoc3BlZWNoLnJlc3VsdHMpIHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHNwZWVjaC5yZXN1bHRzW3NwZWVjaC5yZXN1bHRJbmRleF07XHJcbiAgICAgICAgICBjb25zdCB0cmFuc2NyaXB0ID0gcmVzdWx0WzBdLnRyYW5zY3JpcHQ7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LmlzRmluYWwpIHtcclxuICAgICAgICAgICAgdGVybSA9IF8udHJpbSh0cmFuc2NyaXB0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0RpZCB5b3Ugc2FpZD8gLT4gJyArIHRlcm0gKyAnICwgSWYgbm90IHRoZW4gc2F5IHNvbWV0aGluZyBlbHNlLi4uJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dCh0ZXJtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuc3BlZWNoUmVjb2duaXRpb24ub25lcnJvciA9IGVycm9yID0+IHtcclxuICAgICAgICBvYnNlcnZlci5lcnJvcihlcnJvcik7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uLm9uZW5kID0gKCkgPT4ge1xyXG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uLnN0YXJ0KCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTYXkgc29tZXRoaW5nIC0gV2UgYXJlIGxpc3RlbmluZyAhISEnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveVNwZWVjaE9iamVjdCgpIHtcclxuICAgIGlmICh0aGlzLnNwZWVjaFJlY29nbml0aW9uKSB7XHJcbiAgICAgIHRoaXMuc3BlZWNoUmVjb2duaXRpb24uc3RvcCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=