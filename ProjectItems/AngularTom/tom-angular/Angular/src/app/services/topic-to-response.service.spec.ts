import { TestBed } from '@angular/core/testing';

import { TopicToResponseService } from './topic-to-response.service';

describe('TopicToResponseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopicToResponseService = TestBed.get(TopicToResponseService);
    expect(service).toBeTruthy();
  });
});
