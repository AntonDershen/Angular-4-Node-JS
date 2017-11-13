import { Component, OnInit } from '@angular/core';
import { Message, MessageType } from './../../services/message/message';
import { MessageService } from './../../services/message/message.service';

@Component({
    selector: 'messages',
    templateUrl: './angular_app/app/components/message.component/message.component.html'
})

export class MessageComponent {
    messages: Message[] = [];

    constructor(private messageService: MessageService) { }

    ngOnInit() {
        this.messageService.getMessage().subscribe((message: Message) => {
            if (!message) {
                this.messages = [];
                return;
            }
            this.messages.push(message);
        });
    }

    cssClass(message: Message) {
        if (!message) {
            return;
        }
        switch (message.type) {
            case MessageType.Success:
                return 'alert alert-success';
            case MessageType.Error:
                return 'alert alert-danger';
        }
    }
}