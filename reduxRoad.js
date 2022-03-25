let initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0
  };
  
  const reducer = (state = initialWagonState, action) =>{
    switch (action.type){
      case 'gather': {
        return {...state, 
        supplies: initialWagonState.supplies + 15,
        distance: initialWagonState.distance,
        days: initialWagonState.days + 1
        }
      }
      case 'travel': {
        return {...state, 
        supplies: initialWagonState.supplies - (20),
        distance: initialWagonState.distance + 10,
        days: initialWagonState.days + 1
        }
      }
      case 'tippedWagon': {
        return {...state, 
        supplies: initialWagonState.supplies - 30,
        distance: initialWagonState.distance,
        days: initialWagonState.days + 1
        }
      }
      default: {
        return state;
      }
    }
  }
  
  let state = reducer(undefined, {});
  console.log(initialWagonState);
  
  initialWagonState = reducer(initialWagonState, 
    {
    type: 'travel', payload: 1
    });
    console.log(initialWagonState);
  
  initialWagonState = reducer(initialWagonState, 
    {
    type: 'gather'
    });
    console.log(initialWagonState);
  
  initialWagonState = reducer(initialWagonState, 
    {
    type: 'tippedWagon'
    });
    console.log(initialWagonState);
  
  initialWagonState = reducer(initialWagonState, 
    {
    type: 'travel',
    payload: 3
    });
    console.log(initialWagonState);
  
  
  
  
  
  