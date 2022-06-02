/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

import {
  thrillerThumbnailOne,
  thrillerThumbnailTwo,
  thrillerThumbnailThree,
  thrillerThumbnailFour,
  actionThumbnailOne,
  actionThumbnailTwo,
  actionThumbnailThree,
  actionThumbnailFour,
  romanceThumbnailOne,
  romanceThumbnailTwo,
  romanceThumbnailThree,
  romanceThumbnailFour,
  dramaThumbnailOne,
  dramaThumbnailTwo,
  dramaThumbnailThree,
  dramaThumbnailFour,
  thrillerVideoOne,
  thrillerVideoTwo,
  thrillerVideoThree,
  thrillerVideoFour,
  actionVideoOne,
  actionVideoTwo,
  actionVideoThree,
  actionVideoFour,
  romanceVideoOne,
  romanceVideoTwo,
  romanceVideoThree,
  romanceVideoFour,
  dramaVideoOne,
  dramaVideoTwo,
  dramaVideoThree,
  dramaVideoFour,
} from "./../../images.js";
import uuid from "react-uuid";

export const videos = [
  {
    _id: uuid(),
    thumbnail: thrillerThumbnailOne,
    source: thrillerVideoOne,
    title: "Drishyam",
    category: "Thrillers",
  },
  {
    _id: uuid(),
    thumbnail: thrillerThumbnailTwo,
    source: thrillerVideoTwo,
    title: "Kahaani",
    category: "Thrillers",
  },
  {
    _id: uuid(),
    thumbnail: thrillerThumbnailThree,
    source: thrillerVideoThree,
    title: "Andhadhun",
    category: "Thrillers",
  },
  {
    _id: uuid(),
    thumbnail: thrillerThumbnailFour,
    source: thrillerVideoFour,
    title: "Pink",
    category: "Thrillers",
  },
  {
    _id: uuid(),
    thumbnail: actionThumbnailOne,
    source: actionVideoOne,
    title: "War",
    category: "Action",
  },
  {
    _id: uuid(),
    thumbnail: actionThumbnailTwo,
    source: actionVideoTwo,
    title: "Bang Bang",
    category: "Action",
  },
  {
    _id: uuid(),
    thumbnail: actionThumbnailThree,
    source: actionVideoThree,
    title: "Ek Tha Tiger",
    category: "Action",
  },
  {
    _id: uuid(),
    thumbnail: actionThumbnailFour,
    source: actionVideoFour,
    title: "Dhoom 2",
    category: "Action",
  },
  {
    _id: uuid(),
    thumbnail: romanceThumbnailOne,
    source: romanceVideoOne,
    title: "Band Baaja Baaraat",
    category: "Romance",
  },
  {
    _id: uuid(),
    thumbnail: romanceThumbnailTwo,
    source: romanceVideoTwo,
    title: "Yeh Jawaani Hai Deewani",
    category: "Romance",
  },
  {
    _id: uuid(),
    thumbnail: romanceThumbnailThree,
    source: romanceVideoThree,
    title: "Jab We Met",
    category: "Romance",
  },
  {
    _id: uuid(),
    thumbnail: romanceThumbnailFour,
    source: romanceVideoFour,
    title: "2 States",
    category: "Romance",
  },
  {
    _id: uuid(),
    thumbnail: dramaThumbnailOne,
    source: dramaVideoOne,
    title: "3 Idiots",
    category: "Drama",
  },
  {
    _id: uuid(),
    thumbnail: dramaThumbnailTwo,
    source: dramaVideoTwo,
    title: "Shershaah",
    category: "Drama",
  },
  {
    _id: uuid(),
    thumbnail: dramaThumbnailThree,
    source: dramaVideoThree,
    title: "Gully Boy",
    category: "Drama",
  },
  {
    _id: uuid(),
    thumbnail: dramaThumbnailFour,
    source: dramaVideoFour,
    title: "Badhaai Ho",
    category: "Drama",
  },
];
