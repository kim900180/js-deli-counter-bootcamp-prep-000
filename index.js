var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  var number = katzDeliLine.length + 1
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${number} in line.`
  return katzDeliLine
}

function nowServing(katzDeliLine) {
  var name = katzDeliLine[0]
  if (katzDeliLine.length > 0) {
    return "Currently serving " + name + "."
    katzDeli = katzDeliLine.splice(0, 1)
    return katzDeli
  } else {
    return "There is nobody waiting to be served!"
  }
}