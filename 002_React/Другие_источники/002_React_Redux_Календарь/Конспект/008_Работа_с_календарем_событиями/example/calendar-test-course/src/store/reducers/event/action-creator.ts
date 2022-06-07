//reducers event action-creators.ts
import { EventActionEnum, SetEventsAction, SetGuestsAction } from "./types";
import { IUser } from "../../../models/IUser";
import { IEvent } from "../../../models/IEvent";
import { AppDispatch } from "../../index";
import axios from "axios";

export const EventActionCreators = {
  setGuests: (payload: IUser[]): SetGuestsAction => ({
    type: EventActionEnum.SET_GUESTS,
    payload,
  }),
  setEvents: (payload: IEvent[]): SetEventsAction => ({
    type: EventActionEnum.SET_EVENTS,
    payload,
  }),
  fetchGuests: () => async (payload: AppDispatch) => {
    try {
      const guests = await axios.get("./users.json");
    } catch (error) {
      console.log(error);
    }
  },
};
