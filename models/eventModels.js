const { Event } = require("../database/models");

exports.criarUmEvento = async ({
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
}) =>
  await Event.create({
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

exports.listarEventos = async (profile_id) =>
  await Event.findAll({
    where: { profile_id },
  });

exports.buscarTodosEventos = async () => await Event.findAll();
