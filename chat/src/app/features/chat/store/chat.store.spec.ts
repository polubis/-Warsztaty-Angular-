import { TestBed } from '@angular/core/testing';

import { ChatStore } from './chat.store';

describe('ChatStore', () => {
  let service: ChatStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
