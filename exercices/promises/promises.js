//
// This is only a SKELETON file for the 'Promises' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function promisify(func) {
  return (...args) => new Promise((resolve, reject)=>{
    func(...args, (err, result) => {
      if (err) 
        reject(err)
      else
        resolve(result)
      }
  )})
};

export const all = (promises) => {
  return new Promise((resolve, reject) => {
    let list = []
    let c = 0;
    if (!promises){
      resolve()
      return
    }
    if (promises.length === 0) 
      resolve([])
    promises.forEach((p, i) => {
      p.catch(
        (err) => {
          reject(err)
        }
      ).then((data) => {
        c++
        list[i] = data
        if (c === promises.length)
          resolve(list)
      }) 
    });
    
  })
};

export const allSettled = (promises) => {
  return new Promise((resolve, reject) => {
    let list = []
    let c = 0;
    if (!promises){
      resolve()
      return
    }
    if (promises.length === 0) 
      resolve([])
    promises.forEach((p, i) => {
      p.then((data) => {
        c++
        list[i] = data
        if (c === promises.length)
          resolve(list)
      }).catch(
        (err) => {
          c++
          list[i] = err
          if (c === promises.length)
            resolve(list)
        }
      ) 
    });
    
  })
};

export const race = (promises) => {
  return new Promise((resolve, reject) => {
    if (!promises){
      resolve()
      return
    }
    if (promises.length === 0) 
      resolve([])
    promises.forEach((p, i) => {
      p.then((data) => {
        resolve(data)
      }).catch((e) => {
        reject(e)
      })
    })
  })
};

export const any = (promises) => {
  return new Promise((resolve, reject) => {
    let list = []
    let c = 0;
    if (!promises){
      resolve()
      return
    }
    if (promises.length === 0) 
      resolve([])
    promises.forEach((p, i) => {
      p.then((data) => {
          resolve(data)
      }).catch(
        (err) => {
          c++
          list[i] = err
          if (c === promises.length)
            reject(list)
        }
      ) 
    });
  })
};