import { Pipe, PipeTransform } from '@angular/core';

import { Room } from '../models/Room';

@Pipe({ name: 'filterRooms' })
export class FilterRoomsPipe implements PipeTransform {
  /**
   * Filters rooms by given search phrase
   *
   * @param rooms - rooms list
   * @param phrase - search phrase passed as second param
   * @returns Filtered rooms
   */
  transform(rooms: Room[], phrase: string): Room[] {
    return rooms.filter((room) => room.name.toLowerCase().includes(phrase));
  }
}
