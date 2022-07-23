import { mount } from "@vue/test-utils";
import EventCard from "@/components/EventCard";
import {events} from '../mocks/test-db.json';

const testIndex = 1;

describe("EventCard", () => {
  const testEvent = events[testIndex];

  it(`renders the event's data successfully`, () => {
    const event = { ...testEvent};
    const wrapper = mount(EventCard, {
      props: {
        event
      }
    });

    const wrapperHtml = wrapper.html();
    expect(wrapperHtml).toContain(testEvent.date);
    expect(wrapperHtml).toContain(testEvent.time);
    expect(wrapperHtml).toContain(testEvent.title);
  });
});
