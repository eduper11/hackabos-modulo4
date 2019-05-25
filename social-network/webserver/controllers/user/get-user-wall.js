"use strict";

const PostModel = require("../../../databases/models/post-model");
const WallModel = require("../../../databases/models/wall-model");

async function getPostsById(postsId) {
  const filter = {
    _id: {
      $in: postsId
    },
    deletedAt: null
  };

  const projection = {
    __v: 0,
    deletedAt: 0
  };

  const posts = await PostModel.find(filter, projection).lean();

  return posts;
}

async function getUserWall(req, res, next) {
  const { uuid } = req.claims;

  const filter = {
    uuid
  };

  const projection = {
    _id: 0,
    posts: 1
  };

  try {
    const wall = await WallModel.findOne(filter, projection).lean();
    if (!wall) {
      return {
        data: []
      };
    }

    const posts = await getPostsById(wall.posts);

    const response = {
      data: posts
    };

    return res.status(200).send(response);
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

module.exports = getUserWall;
