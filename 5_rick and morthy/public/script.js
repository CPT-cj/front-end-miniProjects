document.addEventListener("DOMContentLoaded", function () {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((response) => response.results)
    .then((data) => {
      console.log(data);
      const container = document.querySelector("#container");
      data.forEach((character) => {
        const Card = document.createElement("div");
        Card.className =
          "bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-150 h-80";

        let statusColor;
        if (character.status === "Alive") {
          statusColor = "bg-green-200 text-green-800";
        } else if (character.status === "Dead") {
          statusColor = "bg-red-200 text-red-800";
        } else if (character.status === "unknown") {
          statusColor = "bg-gray-200 text-gray-800";
        }

        Card.innerHTML = `
                            <div class="p-4 w-full flex-col flex items-center">
                                <h3 class="text-xl text-white font-semibold mb-2 ">${
                                  character.name
                                }</h3>
                                <span class="inline-block px-3 py-1  rounded-full text-sm font-medium ${statusColor}">
                                    statue: ${
                                      character.status === "Alive"
                                        ? "Alive"
                                        : character.status === "Dead"
                                        ? "Dead"
                                        : "Unknown"
                                    }
                                </span>
                            </div>
                            <img src="${
                              character.image
                            }" " class="w-7/8 h-48 mx-auto  object-cover">
                        `;

        container.appendChild(Card);
      });
    })
    .catch((error) => {
      console.log(
        "sorry bro you need to fucking get access to internet  " + error
      );
    });
});
