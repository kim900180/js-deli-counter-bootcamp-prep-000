var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  var number = katzDeliLine.length + 1
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${number} in line.`
  return katzDeliLine
}

function nowServing(katzDeliLine) {
  var serving = katzDeliLine[0]
  return `Currently serving ${serving}.`
  katzDeliLine.shift()
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  }
}