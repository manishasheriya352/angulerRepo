import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  animations: [
    trigger('inOutAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: '0' }), animate('.5s ease-out', style({ opacity: '1' }))]),
      transition(':leave', [style({ opacity: '1' }), animate('.5s ease-out', style({ opacity: '0' }))]),
    ]),
  ],
})
export class PostComponent implements OnInit {
  @ViewChild('composeref') composeReferance: any;
  faCoffee = faCoffee;
  userProfile = faUser;
  plusSign = faPlus;
  deleteICON = faTrashAlt;
  showReplies: boolean = false;
  postArrayCopy;
  closeResult: string;
  faAngleDoubleDown = faAngleDoubleDown;
  postArray = [{
    key: 1,
    heading: 'Hiring in TCS',
    name: 'Manisha Sheriya',
    date: '21 Aug',
    description: "  Senior Software Engineer- AEM Developer",
    replies: [{
      commentedBy: 'Mahi Visvkarma',
      commentTime: '22 Aug',
      commentValue: 'Checkboxes are used if you want the user to select any number of options from a list of preset options.The following example contains three checkboxes. The last option is disabled:'
    },
    {
      commentedBy: 'Chanda Patidar',
      commentTime: '22 july',
      commentValue: 'Checkboxes are used if you want the user to select any number of options from a list of preset options.The following example contains three checkboxes. The last option is disabled:'
    }]
  },
  {
    key: 2,
    heading: 'Hiring in Delloite',
    name: 'Shital Yadav',
    date: '21 Aug',
    description: "  junior Software Engineer- Frant End Developer",
    replies: [{
      commentedBy: 'Shital Yadav',
      commentTime: '22 may',
      commentValue: 'dummay comment'
    },
    {
      commentedBy: 'dheeraj',
      commentTime: '22 aug',
      commentValue: 'dummay comment'
    }]
  },
  {
    key: 3,
    heading: 'Hiring in servicenow',
    name: ' Raju Patidar',
    date: '21 Aug',
    description: "  Senior Software Engineer- Full Stack Developer",
    replies: [{
      commentedBy: 'Dheeraj Bharsiya',
      commentTime: '22 aug',
      commentValue: 'Checkboxes are used if you want the user to select any number of options from a list of preset options. The following example contains three checkboxes. The last option is disabled:'
    },
    {
      commentedBy: 'Manisha Sheriya',
      commentTime: '12 aug',
      commentValue: 'Checkboxes are used if you want the user to select any number of options from a list of preset options.The following example contains three checkboxes. The last option is disabled:'
    }]
  }
    , {
    key: 4,
    heading: 'Hiring in TCS',
    name: 'Jayant Prajapati',
    date: '21 Aug',
    description: "  Senior Software Engineer- AEM Developer",
    replies: [{
      commentedBy: 'dheeraj',
      commentTime: '22 aug',
      commentValue: 'dummay comment'
    },
    {
      commentedBy: 'dheeraj',
      commentTime: '22 aug',
      commentValue: 'dummay comment'
    }]
  }
  ]
  constructor(private modalService: NgbModal) {

  }

  ngOnInit(): void {
  }
  onShowReplies() {
    this.showReplies = !this.showReplies;
  }
  onAddComment(replyInput, postObj) {
    postObj.replies.splice(0, 0, {
      commentedBy: 'Manisha Sheriya',
      commentTime: '22 aug',
      commentValue: replyInput
    });
  }
  onDeletePost(postObj) {
    this.postArray = this.postArray.filter(function (post) { return post.key !== postObj.key })
  }
  showMyPost(event) {
    let name = 'Jayant Prajapati';
    if (event.target.checked) {
      this.postArrayCopy = this.postArray;
      console.log(event.target.checked);
      this.postArray = this.postArray.filter(function (post) { return post.name == name })
    } else {
      this.postArray = this.postArrayCopy;
    }
  }
  onAddPost() {
    console.log("dfdsa");
    this.composeReferance.nativeElement.style.display = "inline-block";
    this.composeReferance.nativeElement.style.transition = "0.5s";

  }
  onLeavePost() {

    this.composeReferance.nativeElement.style.display = "none";
  }
  open(content) {
    /*   this.modalService.open(content, { size: 'lg' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}';
      },(reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      } */
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(result);
      this.postArray.unshift(
        {
          key: 5,
          heading: result.subjectName,
          name: 'Madhuri Prajapati',
          date: '21 Aug',
          description: result.description,
          replies:[],
        }
        );

    }, (reason) => {
      this.closeResult = `Dismissed`;
      console.log(this.closeResult);
    });
  }

}

