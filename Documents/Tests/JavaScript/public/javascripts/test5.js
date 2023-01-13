// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).
module.exports = function kClosest(points, k) {
   
    const dist = (point) => {
        return point[0] * point[0] + point[1] * point[1];
      }
      
     
        const n = points.length;
        let map = [];
      
        for (let i = 0; i < n; ++i) {
          map.push({
            distance: dist(points[i]),
            points: points[i]
          })
        }
        map.sort((a, b) => a.distance - b.distance);
          
        let ans = [];
        for (let j = 0; j < k; j++) {
            ans.push(map[j].points)
        }
        return k === n ? points : ans
      };