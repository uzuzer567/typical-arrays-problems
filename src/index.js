exports.min = function min (array) {
  if(array == undefined || array.length == 0 ) {
	return 0;
  }
  var answer = array[0];
  for(var i = 0; i < array.length; i++) {
	if(answer == undefined || array[i] == undefined) {
		return 0;
	}
	else if(answer > array[i]) {
		answer = array[i];
	}
  }
  return answer;
}

exports.max = function max (array) {
  if(array == undefined || array.length == 0) {
	return 0;
  }
  var answer = array[0];
  for(var i = 0; i < array.length; i++) {
	if(answer == undefined || array[i] == undefined) {
		return 0;
	}
	else if(answer < array[i]) {
		answer = array[i];
	}
  }
  return answer;
}

exports.avg = function avg (array) {
  if(array == undefined || array.length == 0) {
	return 0;
  }
  var answer = 0;
  for(var i = 0; i < array.length; i++) {
	if(answer == undefined || array[i] == undefined) {
		return 0;
	}
	else {
		answer += array[i];
	}
  }
  return answer / array.length;
}
