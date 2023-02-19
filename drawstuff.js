/* classes */

class Color {
  constructor(r, g, b, a) {
    try {
      if (
        typeof r !== "number" ||
        typeof g !== "number" ||
        typeof b !== "number" ||
        typeof a !== "number"
      )
        throw "color component not a number";
      else if (r < 0 || g < 0 || b < 0 || a < 0)
        throw "color component less than 0";
      else if (r > 255 || g > 255 || b > 255 || a > 255)
        throw "color component bigger than 255";
      else {
        this[0] = r;
        this[1] = g;
        this[2] = b;
        this[3] = a;
      }
    } catch (e) {
      // end try

      console.log(e);
    }
  } // end Color constructor

  // Color change method
  change(r, g, b, a) {
    try {
      if (
        typeof r !== "number" ||
        typeof g !== "number" ||
        typeof b !== "number" ||
        typeof a !== "number"
      )
        throw "color component not a number";
      else if (r < 0 || g < 0 || b < 0 || a < 0)
        throw "color component less than 0";
      else if (r > 255 || g > 255 || b > 255 || a > 255)
        throw "color component bigger than 255";
      else {
        this[0] = r;
        this[1] = g;
        this[2] = b;
        this[3] = a;
      }
    } catch (e) {
      // end try

      console.log(e);
    }
  } // end Color change method
} // end color class

class Vector {
  constructor(x, y, z) {
    this.set(x, y, z);
  } // end constructor

  magnitude() {
    return Math.sqrt(
      Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2)
    );
  }

  static reflect(v, n) {
    let s = 2 * Vector.dot(v, n);
    return Vector.subtract(v, Vector.scale(s, n));
  }

  // sets the components of a vector
  set(x, y, z) {
    try {
      if (
        typeof x !== "number" ||
        typeof y !== "number" ||
        typeof z !== "number"
      )
        throw "vector component not a number";
      else this.x = x;
      this.y = y;
      this.z = z;
    } catch (e) {
      // end try

      console.log(e);
    }
  } // end vector set

  // copy the passed vector into this one
  copy(v) {
    try {
      if (!(v instanceof Vector)) throw "Vector.copy: non-vector parameter";
      else this.x = v.x;
      this.y = v.y;
      this.z = v.z;
    } catch (e) {
      // end try

      console.log(e);
    }
  }

  toConsole(prefix) {
    console.log(prefix + "[" + this.x + "," + this.y + "," + this.z + "]");
  } // end to console

  // static dot method
  static dot(v1, v2) {
    try {
      if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
        throw "Vector.dot: non-vector parameter";
      else return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
    } catch (e) {
      // end try

      console.log(e);
      return NaN;
    }
  } // end dot static method

  static cross(v1, v2) {
    try {
      if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
        throw "Vector.dot: non-vector parameter";
      else
        return new Vector(
          v1.y * v2.z - v1.z * v2.y,
          v1.z * v2.x - v1.x * v2.z,
          v1.x * v2.y - v1.y * v2.x
        );
    } catch (e) {
      // end try

      console.log(e);
      return NaN;
    }
  }

  // static add method
  static add(v1, v2) {
    try {
      if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
        throw "Vector.add: non-vector parameter";
      else return new Vector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
    } catch (e) {
      // end try

      console.log(e);
      return new Vector(NaN, NaN, NaN);
    }
  } // end add static method

  // static subtract method, v1-v2
  static subtract(v1, v2) {
    try {
      if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
        throw "Vector.subtract: non-vector parameter";
      else {
        var v = new Vector(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
        //v.toConsole("Vector.subtract: ");
        return v;
      }
    } catch (e) {
      // end try

      console.log(e);
      return new Vector(NaN, NaN, NaN);
    }
  } // end subtract static method

  // static divide method, v1.x/v2.x etc
  static divide(v1, v2) {
    try {
      if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
        throw "Vector.divide: non-vector parameter";
      else {
        var v = new Vector(v1.x / v2.x, v1.y / v2.y, v1.z / v2.z);
        //v.toConsole("Vector.divide: ");
        return v;
      }
    } catch (e) {
      // end try

      console.log(e);
      return new Vector(NaN, NaN, NaN);
    }
  } // end divide static method

  // static divide method, v1.x/v2.x etc
  static multiply(v1, v2) {
    try {
      if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
        throw "Vector.multiply: non-vector parameter";
      else {
        var v = new Vector(v1.x * v2.x, v1.y * v2.y, v1.z * v2.z);
        //v.toConsole("Vector.divide: ");
        return v;
      }
    } catch (e) {
      // end try

      console.log(e);
      return new Vector(NaN, NaN, NaN);
    }
  } // end multiply static method

  // static scale method
  static scale(c, v) {
    try {
      if (!(typeof c === "number") || !(v instanceof Vector))
        throw "Vector.scale: malformed parameter";
      else return new Vector(c * v.x, c * v.y, c * v.z);
    } catch (e) {
      // end try

      console.log(e);
      return new Vector(NaN, NaN, NaN);
    }
  } // end scale static method

  // static normalize method
  static normalize(v) {
    try {
      if (!(v instanceof Vector))
        throw "Vector.normalize: parameter not a vector";
      else {
        var lenDenom = 1 / Math.sqrt(Vector.dot(v, v));
        return Vector.scale(lenDenom, v);
      }
    } catch (e) {
      // end try

      console.log(e);
      return new Vector(NaN, NaN, NaN);
    }
  } // end scale static method
} // end Vector class

/* utility function */

// generate n integers in random order
// uses Fisher-Yates shuffle
function randPermutation(n) {
  var array = new Array(n);
  var bagSize = n,
    temp,
    randChoice;

  // fill the array
  for (var i = 0; i < n; i++) array[i] = i;

  // while the bag isn't empty, pick from it
  while (bagSize !== 0) {
    randChoice = Math.floor(Math.random() * bagSize); // pick from bag
    bagSize--; // bag is less one
    temp = array[bagSize]; // remember what was at new bag slot
    array[bagSize] = array[randChoice]; // move old pick to new slot
    array[randChoice] = temp; // copy old element to old slot
  } // end while

  // for (i=0; i<n; i++)
  //    console.log(array[i]);

  return array;
}

// get the JSON file from the passed URL
function getJSONFile(url, descr) {
  try {
    if (typeof url !== "string" || typeof descr !== "string")
      throw "getJSONFile: parameter not a string";
    else {
      var httpReq = new XMLHttpRequest(); // a new http request
      httpReq.open("GET", url, false); // init the request
      httpReq.send(null); // send the request
      var startTime = Date.now();
      while (
        httpReq.status !== 200 &&
        httpReq.readyState !== XMLHttpRequest.DONE
      ) {
        if (Date.now() - startTime > 3000) break;
      } // until its loaded or we time out after three seconds
      if (httpReq.status !== 200 || httpReq.readyState !== XMLHttpRequest.DONE)
        throw "Unable to open " + descr + " file!";
      else return JSON.parse(httpReq.response);
    } // end if good params
  } catch (e) {
    // end try

    console.log(e);
    return String.null;
  }
} // end get input json file

// Solve quadratic. Return empty array if no solutions,
// one t value if one solution, two if two solutions.
function solveQuad(a, b, c) {
  var discr = b * b - 4 * a * c;
  // console.log("a:"+a+" b:"+b+" c:"+c);

  if (discr < 0) {
    // no solutions
    // console.log("no roots!");
    return [];
  } else if (discr == 0) {
    // one solution
    // console.log("root: "+(-b/(2*a)));
    return [-b / (2 * a)];
  } else {
    // two solutions
    var denom = 0.5 / a;
    var term1 = -b;
    var term2 = Math.sqrt(discr);
    var tp = denom * (term1 + term2);
    var tm = denom * (term1 - term2);
    // console.log("root1:"+tp+" root2:"+tm);
    if (tm < tp) return [tm, tp];
    else return [tp, tm];
  }
} // end solveQuad

// get the input ellipsoids from the standard class URL
function getInputEllipsoids() {
  const INPUT_ELLIPSOIDS_URL =
    "https://ncsucg4games.github.io/prog1/spheres.json";
  //"https://ncsucgclass.github.io/prog1/ellipsoids.json";

  // load the ellipsoids file
  var httpReq = new XMLHttpRequest(); // a new http request
  httpReq.open("GET", INPUT_ELLIPSOIDS_URL, false); // init the request
  httpReq.send(null); // send the request
  var startTime = Date.now();
  while (httpReq.status !== 200 && httpReq.readyState !== XMLHttpRequest.DONE) {
    if (Date.now() - startTime > 3000) break;
  } // until its loaded or we time out after three seconds
  if (httpReq.status !== 200 || httpReq.readyState !== XMLHttpRequest.DONE) {
    console.log * "Unable to open input ellipses file!";
    return String.null;
  } else return JSON.parse(httpReq.response);
} // end get input ellipsoids

// ray ellipsoid intersection
// if no intersect, return NaN
// if intersect, return xyz vector and t value
// intersects in front of clipVal don't count
function rayEllipsoidIntersect(ray, ellipsoid, clipVal) {
  try {
    if (!(ray instanceof Array) || !(ellipsoid instanceof Object))
      throw "RayEllipsoidIntersect: ray or ellipsoid are not formatted well";
    else if (ray.length != 2)
      throw "RayEllipsoidIntersect: badly formatted ray";
    else {
      // valid params
      var A = new Vector(ellipsoid.a, ellipsoid.b, ellipsoid.c); // A as a vector
      var dDivA = Vector.divide(ray[1], A); // D/A
      var quadA = Vector.dot(dDivA, dDivA); // dot(D/A,D/A)
      var EmCdivA = Vector.divide(
        Vector.subtract(
          ray[0],
          new Vector(ellipsoid.x, ellipsoid.y, ellipsoid.z)
        ),
        A
      ); // (E-C)/A
      var quadB = 2 * Vector.dot(dDivA, EmCdivA); // 2 * dot(D/A,(E-C)/A)
      var quadC = Vector.dot(EmCdivA, EmCdivA) - 1; // dot((E-C)/A,(E-C)/A) - 1
      // if (clipVal == 0) {
      //     ray[0].toConsole("ray.orig: ");
      //     ray[1].toConsole("ray.dir: ");
      //     console.log("a:"+a+" b:"+b+" c:"+c);
      // } // end debug case

      var qsolve = solveQuad(quadA, quadB, quadC);
      if (qsolve.length == 0) throw "no intersection";
      else if (qsolve.length == 1) {
        if (qsolve[0] < clipVal) throw "intersection too close";
        else {
          var isect = Vector.add(ray[0], Vector.scale(qsolve[0], ray[1]));
          //console.log("t: "+qsolve[0]);
          //isect.toConsole("intersection: ");
          return { exists: true, xyz: isect, t: qsolve[0] };
        } // one unclipped intersection
      } else if (qsolve[0] < clipVal) {
        if (qsolve[1] < clipVal) throw "intersections too close";
        else {
          var isect = Vector.add(ray[0], Vector.scale(qsolve[1], ray[1]));
          //console.log("t2: "+qsolve[1]);
          //isect.toConsole("intersection: ");
          return {
            exists: true,
            xyz: isect,
            t: qsolve[1],
            n: Vector.normalize(
              Vector.subtract(
                isect,
                new Vector(ellipsoid.x, ellipsoid.y, ellipsoid.z)
              )
            ),
            o: ellipsoid,
          };
        } // one intersect too close, one okay
      } else {
        var isect = Vector.add(ray[0], Vector.scale(qsolve[0], ray[1]));
        var isectMCtr = Vector.subtract(
          isect,
          new Vector(ellipsoid.x, ellipsoid.y, ellipsoid.z)
        );
        var derivCoeffs = new Vector(
          ellipsoid.a * ellipsoid.a,
          ellipsoid.b * ellipsoid.b,
          ellipsoid.c * ellipsoid.c
        );
        var derivCoeffs = Vector.divide(new Vector(2, 2, 2), derivCoeffs);
        var N = Vector.normalize(Vector.multiply(isectMCtr, derivCoeffs)); // surface normal
        //console.log("t1: "+qsolve[0]);
        //isect.toConsole("intersection: ");
        return { exists: true, xyz: isect, t: qsolve[0], n: N, o: ellipsoid };
      } // both not too close
    } // end if valid params
  } catch (e) {
    // end try

    //console.log(e);
    return { exists: false, xyz: NaN, t: NaN };
  }
} // end raySphereIntersect

function side(n, i, a, b) {
  var f = Vector.subtract(i, a);
  var g = Vector.subtract(b, a);
  return Math.sign(Vector.dot(n, Vector.cross(f, g)));
}

function IsPointInsideTriangle(i, a, b, c, n) {
  try {
    if (
      !(i instanceof Vector) ||
      !(a instanceof Vector) ||
      !(b instanceof Vector) ||
      !(c instanceof Vector)
    )
      throw "Need vector inputs";
    else {
      var s1 = side(n, i, a, b);
      var s2 = side(n, i, b, c);
      var s3 = side(n, i, c, a);
      if (s1 == s2 && s2 == s3) return true;
      else return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
}

function rayTriangleIntersect(ray, triangle, clipVal) {
  try {
    // console.log("RayTriangleIntersect");
    if (!(ray instanceof Array) || !(triangle instanceof Object))
      throw "RayTriangleIntersect: ray or ellipsoid are not formatted well";
    else if (ray.length != 2) throw "RayTriangleIntersect: badly formatted ray";
    else {
      // valid params
      var vertA = new Vector(
        triangle.vertices[0][0],
        triangle.vertices[0][1],
        triangle.vertices[0][2]
      );
      var vertB = new Vector(
        triangle.vertices[1][0],
        triangle.vertices[1][1],
        triangle.vertices[1][2]
      );
      var vertC = new Vector(
        triangle.vertices[2][0],
        triangle.vertices[2][1],
        triangle.vertices[2][2]
      );
      var triNormal = Vector.cross(
        Vector.subtract(vertB, vertA),
        Vector.subtract(vertC, vertA)
      );
      // console.log(triNormal);
      var d = Vector.dot(triNormal, vertA); //console.log("d: " + d);
      var n_dot_eye = Vector.dot(triNormal, ray[0]); //console.log("n_dot_eye: " + n_dot_eye);
      var n_dot_dir = Vector.dot(triNormal, ray[1]); //console.log("n_dot_dir: " + n_dot_dir);
      if (n_dot_dir == 0) {
        throw "parallel planes!";
      } else {
        var t = (d - n_dot_eye) / n_dot_dir; //console.log("t: " + t);
        var isect = Vector.add(ray[0], Vector.scale(t, ray[1])); //console.log(isect);
        var exitsInside = IsPointInsideTriangle(
          isect,
          vertA,
          vertB,
          vertC,
          triNormal
        );
        return {
          exists: exitsInside,
          xyz: isect,
          t: t,
          n: triNormal,
          o: triangle,
        };
      }
    } // end if valid params
  } catch (e) {
    // end try

    //console.log(e);
    return { exists: false, xyz: NaN, t: NaN };
  }
}

// draw a pixel at x,y using color
function drawPixel(imagedata, x, y, color) {
  try {
    if (typeof x !== "number" || typeof y !== "number")
      throw "drawpixel location not a number";
    else if (x < 0 || y < 0 || x >= imagedata.width || y >= imagedata.height)
      throw "drawpixel location outside of image";
    else if (color instanceof Color) {
      var pixelindex = (y * imagedata.width + x) * 4;
      imagedata.data[pixelindex] = color[0];
      imagedata.data[pixelindex + 1] = color[1];
      imagedata.data[pixelindex + 2] = color[2];
      imagedata.data[pixelindex + 3] = color[3];
    } else throw "drawpixel color is not a Color";
  } catch (e) {
    // end try

    console.log(e);
  }
} // end drawPixel

// returns true if passed light is occluded from passed intersect/ellipsoid
// by passed array of ellipsoids
function isLightOccluded(L, isectPos, isectEllipsoid, ellipsoids) {
  var e = 0; // which ellipsoid
  var lightOccluded = false; // if light is occluded
  var occluderIsect = {}; // occluder intersect details
  // console.log("testing for occlusions");

  // check each ellipsoid up to intersected ellipsoid to see if it occludes
  while (!lightOccluded && e < isectEllipsoid) {
    occluderIsect = rayEllipsoidIntersect([isectPos, L], ellipsoids[e], 0);
    if (!occluderIsect.exists) {
      // no intersection
      e++; // on to next ellipsoid
    } else if (occluderIsect.t > 1) {
      // light in front of intersection
      e++; // on to next sphere
    } else {
      lightOccluded = true;
      // console.log("occlusion found from ellipsoid "+isectEllipsoid+" to "+e);
    } // end if occlusion found
  } // while all ellipsoids up to one intersected by eye

  // check each ellipsoid after intersected ellipsoid to see if it occludes
  e = isectEllipsoid + 1;
  while (!lightOccluded && e < ellipsoids.length) {
    occluderIsect = rayEllipsoidIntersect([isectPos, L], ellipsoids[e], 0);
    // console.log("oisect: "+occluderIsect);
    if (!occluderIsect.exists) {
      // no intersection
      e++; // on to next ellipsoid
    } else if (occluderIsect.t > 1) {
      // light in front of intersection
      e++; // on to next ellipsoid
    } else {
      lightOccluded = true;
      // console.log("occlusion found from ellipsoid "+isectEllipsoid+" to "+e);
    } // end if occlusion found
  } // while all ellipsoids after one intersected by eye

  return lightOccluded;
} // end is light occluded

function isTriangleLightOccluded(L, isectPos, ellipsoids) {
  var e = 0; // which ellipsoid
  var lightOccluded = false; // if light is occluded
  var occluderIsect = {}; // occluder intersect details
  // console.log("testing for occlusions");

  // check each ellipsoid after intersected ellipsoid to see if it occludes
  while (!lightOccluded && e < ellipsoids.length) {
    occluderIsect = rayEllipsoidIntersect([isectPos, L], ellipsoids[e], 0);
    // console.log("oisect: "+occluderIsect);
    if (!occluderIsect.exists) {
      // no intersection
      e++; // on to next ellipsoid
    } else if (occluderIsect.t > 1) {
      // light in front of intersection
      e++; // on to next ellipsoid
    } else {
      lightOccluded = true;
      // console.log("occlusion found from ellipsoid "+isectEllipsoid+" to "+e);
    } // end if occlusion found
  } // while all ellipsoids after one intersected by eye

  return lightOccluded;
} // end is light occluded

// given a pixel position, calculate x and y pixel and world coords
function getPixelLocat(pixelNum, w, h) {
  var y = Math.floor(pixelNum / w);
  var x = pixelNum - y * w;
  var wx = WIN_LEFT + (x / w) * (WIN_RIGHT - WIN_LEFT);
  var wy = WIN_TOP + (y / h) * (WIN_BOTTOM - WIN_TOP);

  //console.log("pixelNum: "+pixelNum+", x:"+x+", y:"+y+", wx:"+wx+", wy:"+wy);

  return { x: x, y: y, wx: wx, wy: wy };
}

// generate n integers in random order
// uses Fisher-Yates shuffle
function randPermutation(n) {
  var array = new Array(n);
  var bagSize = n,
    temp,
    randChoice;

  // fill the array
  for (var i = 0; i < n; i++) array[i] = i;

  // while the bag isn't empty, pick from it
  while (bagSize !== 0) {
    randChoice = Math.floor(Math.random() * bagSize); // pick from bag
    bagSize--; // bag is less one
    temp = array[bagSize]; // remember what was at new bag slot
    array[bagSize] = array[randChoice]; // move old pick to new slot
    array[randChoice] = temp; // copy old element to old slot
  } // end while

  // for (i=0; i<n; i++)
  //    console.log(array[i]);

  return array;
}

// Like intersect function, but exclude checking intersect for given shape.
function shapeIntersect(pos, dir, shape) {
  var closestT = Number.MAX_VALUE;
  var isect;

  for (var e = 0; e < inputEllipsoids.length; e++) {
    let el = inputEllipsoids[e];
    if (shape.x != undefined)
      if (el.x == shape.x && el.y == shape.y && el.z == shape.z) continue;
    let temp = rayEllipsoidIntersect([pos, dir], inputEllipsoids[e], 0);
    if (temp.exists)
      if (temp.t < closestT) {
        closestT = temp.t;
        isect = temp;
      }
  }
  for (var e = 0; e < inputTriangles.length; e++) {
    let t = inputTriangles[e];
    if (shape.vertices != undefined)
      if (
        t.vertices[0] == shape.vertices[0] &&
        t.vertices[1] == shape.vertices[1] &&
        t.vertices[2] == shape.vertices[2]
      )
        continue;
    let temp = rayTriangleIntersect([pos, dir], inputTriangles[e], 0);
    if (temp.exists)
      if (temp.t < closestT) {
        closestT = temp.t;
        isect = temp;
      }
  }
  for (var e = 0; e < inputLights.length; e++) {
    let t = inputLights[e];
    if (shape.vertices != undefined)
      if (
        t.vertices[0] == shape.vertices[0] &&
        t.vertices[1] == shape.vertices[1] &&
        t.vertices[2] == shape.vertices[2]
      )
        continue;
    let temp = rayTriangleIntersect([pos, dir], inputLights[e], 0);
    if (temp.exists)
      if (temp.t < closestT) {
        closestT = temp.t;
        isect = temp;
      }
  }

  if (isect == undefined) return { exists: false };
  return isect;
}

// Return intersect object if ray touches anything in the scene.
function intersect(pos, dir) {
  var closestT = Number.MAX_VALUE;
  var isect;

  for (var e = 0; e < inputEllipsoids.length; e++) {
    let temp = rayEllipsoidIntersect([pos, dir], inputEllipsoids[e], 0);
    if (temp.exists)
      if (temp.t < closestT) {
        closestT = temp.t;
        isect = temp;
      }
  }
  for (var e = 0; e < inputTriangles.length - 2; e++) {
    let temp = rayTriangleIntersect([pos, dir], inputTriangles[e], 0);
    if (temp.exists)
      if (temp.t < closestT) {
        closestT = temp.t;
        isect = temp;
      }
  }
  for (var e = 0; e < inputLights.length; e++) {
    let temp = rayTriangleIntersect([pos, dir], inputLights[e], 0);
    if (temp.exists)
      if (temp.t < closestT) {
        closestT = temp.t;
        isect = temp;
      }
  }

  if (isect == undefined) return { exists: false };
  return isect;
}

// Calculate indirect light.
function indirIllum(x, dir) {
  let estRad = new Color(0, 0, 0, 255);
  // Russian roulette
  if (Math.random() <= 0.5) {
    let h = hemDir(x.n, x.o.refract);
    let negH = Vector.scale(-1, h);
    let y = shapeIntersect(x.xyz, h, x.o);
    let rad = radiance(y, negH);
    let bp = brdf(x, dir, h, y.o);
    let lam = cos(h, x.n);
    estRad[0] += (rad[0] * bp[0] * lam) / 0.5;
    estRad[1] += (rad[1] * bp[1] * lam) / 0.5;
    estRad[2] += (rad[2] * bp[2] * lam) / 0.5;
  }

  return estRad;
}

// isLightOccluded wrapper to handle triangle intersection.
function lightOccluded(L, x) {
  if (x.o.a != undefined)
    return isLightOccluded(L, x.xyz, x.o, inputEllipsoids);

  for (let e = 0; e < inputEllipsoids.length; e++) {
    let isect = rayEllipsoidIntersect([x.xyz, L], inputEllipsoids[e], 0);
    if (isect.exists) {
      return true;
    }
  }

  return false;
}

// Blinn-Phong df that takes in an out ray as a view ray and an
// in vector as the light ray.
function brdf(x, rOut, rIn, o) {
  let diff = Math.max(Vector.dot(rIn, x.n), 0);
  let c = [
    o.diffuse[0] * diff * x.o.diffuse[0],
    o.diffuse[1] * diff * x.o.diffuse[1],
    o.diffuse[2] * diff * x.o.diffuse[2],
  ];
  let H = Vector.normalize(Vector.add(rIn, rOut));
  let spec = Math.pow(Math.max(0, Vector.dot(H, x.n)), x.o.n);
  c[0] += o.specular[0] * x.o.specular[0] * spec;
  c[1] += o.specular[1] * x.o.specular[1] * spec;
  c[2] += o.specular[2] * x.o.specular[2] * spec;
  return c;
}

// Calculate cos of angle between two vectors
function cos(v1, v2) {
  return Vector.dot(v1, v2) / (v1.magnitude() * v2.magnitude());
}

// Return ranged random number
function rand(min, max) {
  return Math.random() * (max - min) + min;
}

// Calculate emitted light hitting the surface given the surface normal and direction of light.
function Le(x, o, dir) {
  if (o.emitted == undefined) return [0, 0, 0];
  let diff = Math.max(Vector.dot(dir, x.n), 0);
  return [o.emitted[0] * diff, o.emitted[1] * diff, o.emitted[2] * diff];
}

// Calculate direct light.
function dirIllum(x, dir) {
  let c = [0, 0, 0];
  let l = inputLights[Math.floor(Math.random() * inputLights.length)];
  let y = new Vector(0, 0, 0);
  if (l.axis == "x") {
    y.x = l.vertices[0][0];
    y.y = rand(0.25, 0.75);
    y.z = rand(0.25, 0.75);
  } else if (l.axis == "y") {
    y.x = rand(0.25, 0.75);
    y.y = l.vertices[0][1];
    y.z = rand(0.25, 0.75);
  }
  let xy = Vector.subtract(y, x.xyz);
  let xyDir = Vector.normalize(xy);
  let ln = new Vector(l.normal[0], l.normal[1], l.normal[2]);
  let g =
    (cos(x.n, xyDir) * cos(ln, Vector.scale(-1, xyDir))) /
    Math.pow(xy.magnitude(), 2);
  let v = lightOccluded(xy, x) ? 0 : 1;
  let le = Le(x, l, xy);
  let bp = brdf(x, dir, xy, l);
  c[0] +=
    (g * v * bp[0] * le[0]) / ((1 / inputLights.length) * (1 / (0.5 * 0.5)));
  c[1] +=
    (g * v * bp[1] * le[1]) / ((1 / inputLights.length) * (1 / (0.5 * 0.5)));
  c[2] +=
    (g * v * bp[2] * le[2]) / ((1 / inputLights.length) * (1 / (0.5 * 0.5)));

  return c;
}

function hemDir(n, refract) {
  let x = Math.random() * 2 - 1;
  let y = Math.random() * 2 - 1;
  let z = Math.random() * 2 - 1;
  let v = Vector.normalize(new Vector(x, y, z));
  if (refract == true) return v;
  if (Vector.dot(v, n) > 0) return v;
  else return Vector.scale(-1, v);
}

// General radiance function that calculates direct and indirect light.
function radiance(x, dir) {
  let i = indirIllum(x, dir);
  let d = dirIllum(x, dir);
  return [i[0] + d[0], i[1] + d[1], i[2] + d[2]];
}

function framelessRayCastSpheres(context) {
  inputEllipsoids = getJSONFile(INPUT_SPHERES_URL, "ellipsoids");
  inputTriangles = getJSONFile(INPUT_TRIANGLES_URL, "triangles");
  inputLights = getJSONFile(INPUT_LIGHTS_URL, "lights");

  if (inputEllipsoids != String.null && inputLights != String.null) {
    var numPixels = w * h;
    var pixelOrder = randPermutation(numPixels); // rand order for visiting pixels
    var imagedata = context.createImageData(1, 1); //  just one pixel at a time
    imagedata.data[3] = 255; // pixels are always opaque
    var intervalID = 0; // the ID returned by the last setInterval call
    var p = 0; // start at first rand pixel
    //console.log("num pixels: "+numPixels);
    //console.log("number of spheres: " + n);

    // get pixel width and height
    var p1 = getPixelLocat(0, w, h);
    var p2 = getPixelLocat(1, w, h);
    var p3 = getPixelLocat(w, w, h);
    var pWidth = p2.wx - p1.wx;
    var pHeight = p1.wy - p3.wy;
    var samples = 100;

    // update a frame with the next set of random rays
    function framelessUpdate() {
      var endTime = performance.now() + 10;
      // Loop over the pixels and spheres, intersecting them
      while (performance.now() < endTime) {
        let c = new Color(0, 0, 0, 255);
        let pl = getPixelLocat(pixelOrder[p], w, h);

        for (let i = 0; i < samples; i++) {
          let xRand = Math.random();
          xRand = xRand === undefined ? 0 : xRand;
          let yRand = Math.random();
          yRand = yRand === undefined ? 0 : yRand;
          let loc = new Vector(
            pl.wx + xRand * pWidth,
            pl.wy - yRand * pHeight,
            WIN_Z
          );
          let dir = Vector.normalize(Vector.subtract(loc, Eye));
          let negDir = Vector.scale(-1, dir);
          let x = intersect(Eye, dir);
          let rad = radiance(x, negDir);
          c[0] += x.o.emitted[0] + rad[0];
          c[1] += x.o.emitted[1] + rad[1];
          c[2] += x.o.emitted[2] + rad[2];
        }

        imagedata.data[0] = 255 * Math.min(c[0] / samples, 1);
        imagedata.data[1] = 255 * Math.min(c[1] / samples, 1);
        imagedata.data[2] = 255 * Math.min(c[2] / samples, 1);
        context.putImageData(imagedata, pl.x, pl.y);

        p++; // next pixel
        if (p >= numPixels) {
          // back to first pixel if finished
          p = 0;
          //console.log("restart rand pixel order: p=0");
        } // end if reached max pixels
      }
    } // end while in frame

    // update the current frame using frameless updates
    function frameUpdate() {
      // if frameless update is in progress, interrupt it.
      if (intervalID != 0)
        // an update is in progress
        window.clearInterval(intervalID);

      // now the end of frame is over, do
      window.setInterval(framelessUpdate, 1);
      window.requestAnimationFrame(frameUpdate);
    } // end frameUpdate

    window.requestAnimationFrame(frameUpdate);
  } // end if spheres found
} // end frameless ray cast spheres

/* constants and globals */

const WIN_Z = 0;
const WIN_LEFT = 0,
  WIN_RIGHT = 1;
const WIN_BOTTOM = 0,
  WIN_TOP = 1;
const INPUT_SPHERES_URL = "ellipsoids.json";
//"https://ncsucgclass.github.io/prog1/ellipsoids.json";
//"https://pages.github.ncsu.edu/bwatson/introcg-prog1-2017/ellipsoids.json";
const INPUT_LIGHTS_URL = "lights.json";
//"https://ncsucg4games.github.io/prog1/lights.json";
//"https://ncsucgclass.github.io/prog1/lights.json";
//"https://pages.github.ncsu.edu/bwatson/introcg-prog1-2017/lights.json";
const INPUT_TRIANGLES_URL = "triangles.json";

var Eye = new Vector(0.5, 0.5, -0.5); // set the eye position
var w;
var h;

var inputEllipsoids;
var inputTriangles;
var inputLights;

/* main -- here is where execution begins after window load */

function main() {
  // Get the canvas and context
  var canvas = document.getElementById("viewport");
  var context = canvas.getContext("2d");
  w = context.canvas.width;
  h = context.canvas.height;

  framelessRayCastSpheres(context);
}
