const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || '';

export const emotionList = [
  {
    emotion_id: 1,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion/emotion1.png`,
    emotion_description: '완전 좋음',
  },
  {
    emotion_id: 2,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion/emotion2.png`,
    emotion_description: '좋음',
  },

  {
    emotion_id: 3,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion/emotion3.png`,
    emotion_description: '그럭저럭',
  },
  {
    emotion_id: 4,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion/emotion4.png`,
    emotion_description: '나쁨',
  },
  {
    emotion_id: 5,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion/emotion5.png`,
    emotion_description: '끔찍함',
  },
];
