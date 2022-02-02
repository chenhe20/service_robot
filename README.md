# service_robot

> In a given graph some nodes are designated (by the user) as nodes needing servicing.
  For each node v which needs servicing, the servicing has to happen at a specified time t(v).
  The servicing is done by a robot which can move only from node to node along the edges of the graph.
  Each edge (v,u) has a specified ‘travel time’ d(v,u): the robot takes d(v,u) time to move from v to u along the edge (v,u).
  The problem here is to compute the route for the robot so that the robot services as many nodes which need servicing as possible.
  Assume the robot starts at a specified origin node at time 0.
  Consider also the case when you have more than one robot.


# service_robot

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

