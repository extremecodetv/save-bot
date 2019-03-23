const getEntityType = (msg, type) => {
  let entity
  if (msg.entities.length >= 0) {
    entity = msg.entities.filter(e => e.type === type).shift()
  }

  return entity
}

const getEntity = (msg, type) => {
  const entity = getEntityType(msg, type)
  if (entity) {
    let text = msg.text.substring(entity.offset + 1, entity.offset + entity.length)
    return text
  }

  return false
}

module.exports = {
  getEntity
}
