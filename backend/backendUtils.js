function getRandomDate() {
  const date = new Date()
  date.setDate(date.getDate() + Math.floor(Math.random() * 30))
  return date
}

exports.getRandomDate = getRandomDate
