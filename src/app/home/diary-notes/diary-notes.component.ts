import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-diary-notes',
  templateUrl: './diary-notes.component.html',
  styleUrls: ['./diary-notes.component.scss']
})
export class DiaryNotesComponent implements OnInit {
  [x: string]: any;
  

  constructor(private cartService: CartService) { }

  textList = [{ key: '0', title: "Sed ut perspiciati", date: "02/03/2022", url: "./../../../assets/1.jpg", content: "sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt" },
  { key: '1', title: "Neque porro quisquam", date: "03/03/2022", url: "./../../../assets/2.jpg", content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit" },
  { key: '2', title: "Aui dolorem ipsum", date: "04/05/2022", url: "./../../../assets/3.jpg", content: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself" },
  { key: '3', title: "Na hty eb amet", date: "06/05/2022", url: "./../../../assets/4.jpg", content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis " },
  { key: '4', title: "consectetur, adipisci velit", date: "07/05/2022", url: "./../../../assets/5.jpg", content: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta " },
  { key: '5', title: "Finibus Bonorum", date: "08/05/2022", url: "./../../../assets/6.jpg", content: "Lorem ipsum dolor sit amet comes from a line in section 1.10.32." },
  { key: '6', title: "Malorumet et Malorum", url: "./../../../assets/7.jpg", content: "Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc" },
  { key: '7', title: " Finibus Bonorum", date: "09/05/2022", url: "./../../../assets/8.jpg", content: "All the Lorem Ipsum generators on the Internet tend to repeat" },
  { key: '8', title: "consectetur adipiscing elit", date: "10/05/2022", url: "./../../../assets/1.jpg", content: "Lorem ipsum dolor sit ame comes from a line in section 1.10.32." },
  { key: '9', title: "Finibus Bonorum", date: "12/05/2022", url: "./../../../assets/5.jpg", content: "Lorem ipsum dolor sit amet comes from a line in section 1.10.32." },
  { key: '10', title: "consectetur adipiscing elit", date: "13/05/2022", url: "./../../../assets/3.jpg", content: "Lorem ipsum dolor sit am comes from a line in section 1.10.32." },
  { key: '11', title: "Finibus Bonorum", date: "16/05/2022", url: "./../../../assets/4.jpg", content: "Lorem ipsum dolor sit amet comes from a line in section 1.10.32." },

  ];

  ngOnInit(): void {

  }

  editItem(event: any) {
    this.textList[event.key].content = event.result.content;
    this.textList[event.key].date = event.result.date;
    this.textList[event.key].title = event.result.title;
    debugger
  }

  deleteItem(event: any) {
    this.textList.splice(event.key, 1)
  }

}
