const { v4 } = require("uuid");
const eventModels = require("../models/eventModels");

exports.criarUmEvento = async ({
  profile_id,
  name,
  beginning_date,
  ends_date,
  hour,
  finish_hour,
  description,
  local,
  photo_event_path,
}) => {
  const photo_id = Math.floor(Math.random() * 10000);

  const event_id = v4();
  await eventModels.criarUmEvento({
    event_id,
    profile_id,
    name,
    beginning_date,
    ends_date,
    hour,
    finish_hour,
    description,
    local,
    photo_event_path,
    photo_id,
  });
};

exports.listarEventosPorId = async (profile_id) => {
  try {
    const profileEvents = await eventModels.listarEventos(profile_id);
    return profileEvents;
  } catch (error) {
    return error;
  }
};

exports.buscarTodosEventos = () => eventModels.buscarTodosEventos();
