import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Message, MessageType } from './message';

@Injectable()
export class MessageService {
    private messages = new Subject<Message>();

    constructor(private router: Router) {
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.clearMessage();
            }
        });
    }

    getMessage(): Observable<any> {
        return this.messages.asObservable();
    }

    success(message: string) {
        this.message(MessageType.Success, message);
    }

    error(message: string) {
        this.message(MessageType.Error, message);
    }

    message(type: MessageType, message: string) {
        this.clearMessage();
        this.messages.next(<Message>{ type: type, message: message });
    }

    clearMessage() {
        this.messages.next();
    }
}