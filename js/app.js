const eventsStore = [
    {
      title: "INFJ Personality Type - Coffee Shop Meet & Greet",
      description: "Being an INFJ",
      date: new Date(2024, 2, 23, 15),
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ",
      type: "offline",
      attendees: 99,
      category: "Hobbies and Passions",
      distance: 50,
    },
    {
      title:
        "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
      description: "New York AI Users",
      date: new Date(2024, 2, 23, 11, 30),
      image: "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
      type: "offline",
      attendees: 43,
      category: "Technology",
      distance: 25,
    },
    {
      title: "Book 40+ Appointments Per Month Using AI and Automation",
      description: "New Jersey Business Network",
      date:  new Date(2024, 2, 16, 14),
      image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "online",
      attendees: 0,
      category: "Technology",
      distance: 10,
    },
    {
      title: "Dump writing group weekly meetup",
      description: "Dump writing group",
      date: new Date(2024, 2, 13, 11),
      image: "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "online",
      attendees: 77,
      category: "Business",
      distance: 100,
    },
    {
      title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
      description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
      date: new Date(2024, 2, 14, 11),
      image: "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "online",
      attendees: 140,
      category: "Social Activities",
      distance: 74,
    },
    {
      title: "All Nations - Manhattan Missions Church Bible Study",
      description: "Manhattan Bible Study Meetup Group",
      date: new Date(2024, 2, 14, 11),
      image: "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "offline",
      attendees: 0,
      category: "Health and Wellbeing",
      distance: 15,
    },
  ];

  document.addEventListener("DOMContentLoaded", function () {
    const eventsContainer = document.getElementById("event-container");
    const sortType = document.getElementById("sort-type");
    const sortDistance = document.getElementById("sort-distance");
    const sortCategory = document.getElementById("sort-category");

    function createCards(events) {
        eventsContainer.innerHTML = ""; 

        events.forEach(event => {
            const eventCard = document.createElement("div");
            eventCard.classList.add("events-card");

            eventCard.innerHTML = `
                <img src="${event.image}" class="event-image">
                <div class="event-description">
                    <p class="events-date">${event.date.toString()}</p>
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-details">${event.description}</p>
                    <div style="display: flex; align-items: center;">
                    <p class="event-category">${event.category}</p><p class="event-distance">(${event.distance}km)</p>
                    </div>
                    <p class="event-attendees">${event.attendees} attendees</p>
                    <p class="event-type">${event.type === "online" ? "Online" : "Offline"}</p>
                </div>
            `;

            eventsContainer.append(eventCard);
        });
    }

    function filterEvents() {
      let filteredEvents = [...eventsStore];
  
      if (sortType.value !== "any-type") {
          filteredEvents = filteredEvents.filter(event => event.type === sortType.value);
      }
  
      if (sortDistance.value === "less") {
          filteredEvents = filteredEvents.filter(event => event.distance < 50);
      } else if (sortDistance.value === "more") {
          filteredEvents = filteredEvents.filter(event => event.distance > 50);
      }
  
      if (sortCategory.value !== "any-category") {
          filteredEvents = filteredEvents.filter(event => event.category === sortCategory.value);
      }
  
      createCards(filteredEvents);
  }
  

    createCards(eventsStore);
    sortCategory.addEventListener("change", filterEvents);
    sortType.addEventListener("change", filterEvents);
    sortDistance.addEventListener("change", filterEvents);
});