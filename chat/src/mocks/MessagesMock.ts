import { Message } from 'src/app/features/chat/models/Message';

export const MessagesMock: Message[] = [
  {
    id: 1,
    author: {
      id: 1,
      firstName: 'Davey',
      lastName: 'Calyton',
      avatar: 'http://dummyimage.com/194x100.png/5fa2dd/ffffff',
    },
    modificationDate: '2/21/2020',
    content: 'Group Counseling for Substance Abuse Treatment, Psychoeducation',
  },
  {
    id: 2,
    author: {
      id: 2,
      firstName: 'Rae',
      lastName: 'Paradise',
      avatar: 'http://dummyimage.com/194x100.png/5fa2dd/ffffff',
    },
    modificationDate: '5/8/2019',
    content: 'Beam Radiation of Chest Skin using Electrons',
  },
  {
    id: 3,
    author: {
      id: 3,
      firstName: 'Melanie',
      lastName: 'Hatwells',
      avatar: 'http://dummyimage.com/236x173.jpg/dddddd/000000',
    },
    modificationDate: '3/5/2020',
    content: 'Drainage of Left Hand Bursa and Ligament, Open Approach',
  },
  {
    id: 4,
    author: {
      id: 4,
      firstName: 'Raoul',
      lastName: 'Melpuss',
      avatar: 'http://dummyimage.com/110x195.jpg/cc0000/ffffff',
    },

    modificationDate: '2/23/2020',
    content:
      'Supplement of Scalp Subcutaneous Tissue and Fascia with Nonautologous Tissue Substitute, Percutaneous Approach',
  },
];
