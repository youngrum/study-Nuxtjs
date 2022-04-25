const express = require('express')
const router = new express()

router.use('/todos', (_req: any, res: any) => {
  res.json([
    {
      id: 1,
      title: 'リスト1',
      description: 'lorem ipsum',
      done: true
    },
    {
      id: 2,
      title: 'リスト2',
      description: 'lorem ipsum',
      done: false
    },
    {
      id: 3,
      title: 'リスト3',
      description: 'lorem ipsum',
      done: true
    }
  ])
});

module.exports = {
  path: "/api/todos",
  handler: router
};