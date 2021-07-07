const { BASE_API, BASE_USERS, BASE_POSTS, BASE_COMMENTS } = process.env;
const express = require("express");
const router = express.Router();

const pathList = [
    {
        path: BASE_USERS,
        model: 'users'
    },
    {
        path: BASE_POSTS,
        model: 'posts'
    },
    {
        path: BASE_COMMENTS,
        model: 'comments'
    },
];

for (const mapping of pathList) {
  const baseUrl = `${BASE_API}${mapping.path}`;
  const Model = require(`./database/table/${mapping.model}`)

  console.log(baseUrl);

  router.get(`${baseUrl}`, async (req, res) => {
    console.log("get", baseUrl);
    const model = new Model();
    const data = await model.getAll();
    res.json(data);
  });
  router.get(`${baseUrl}/:id`, async (req, res) => {
    console.log("get by id", baseUrl);
    res.json(true);
  });
  router.post(`${baseUrl}/list`, async (req, res) => {
    console.log("post list", baseUrl);

    res.json(true);
  });
  router.post(`${baseUrl}`, async (req, res) => {
    console.log("post", baseUrl);
    res.json(true);
  });
  router.put(`${baseUrl}/:id`, async (req, res) => {
    console.log("put", baseUrl);
    res.json(true);
  });
  router.delete(`${baseUrl}/:id`, async (req, res) => {
    console.log("delete", baseUrl);
    res.json(true);
  });
}

module.exports = router;
