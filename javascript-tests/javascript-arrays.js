const arrays = {
  numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5]
};

arrays.numbers.sort((a, b) => a - b);

const techLanguages = {
  languages: ["JavaScript", "HTML", "CSS", "Java", "C#", "Python", "C/C++"]
};

techLanguages.languages.sort();

const languageRanking = [
  {
    language: " HTML",
    rank: 2
  },
  {
    language: " Bash/Shell",
    rank: 6
  },
  {
    language: " SQL",
    rank: 4
  },
  {
    language: " JavaScript",
    rank: 1
  },
  {
    language: " CSS",
    rank: 3
  },
  {
    language: " Python",
    rank: 7
  },
  {
    language: " Java",
    rank: 5
  }
];

languageRanking.sort(compareRank);
// Code omitted here

function compareRank(a, b) {
  const rankA = a.rank;
  const rankB = b.rank;

  let comparison = 0;
  if (rankA > rankB) {
    comparison = 1;
  } else if (rankA < rankB) {
    comparison = -1;
  }
  return comparison;
}

window.onload = () => {
  const numbersDisplay = document.getElementById("numbers-display");
  const listNumbers = document.getElementById("numbers-action");

  const languagesDisplay = document.getElementById("language-names-display");
  const listLanguages = document.getElementById("language-names-action");

  const popularityDisplay = document.getElementById(
    "language-popularity-display"
  );
  const listPopularity = document.getElementById("language-popularity-action");

  const addToList = {
    appendToList: (list, name) => {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(name));
      list.appendChild(li);
    }
  };

  const addToList2 = {
    appendToList: (list, name1, name2) => {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(name1));
      li.appendChild(document.createTextNode(name2));
      list.appendChild(li);
    }
  };

  listNumbers.onclick = () => {
    const newList = document.getElementById("numbers-display");
    for (number of arrays.numbers) {
      console.log(number);
      addToList.appendToList(newList, number);
    }
  };

  listLanguages.onclick = () => {
    const newList = document.getElementById("language-names-display");
    for (name of techLanguages.languages) {
      console.log(name);
      addToList.appendToList(newList, name);
    }
  };

  listPopularity.onclick = () => {
    const newList = document.getElementById("language-popularity-display");
    for (name in languageRanking) {
      console.log(languageRanking[name].rank, languageRanking[name].language);
      addToList2.appendToList(
        newList,
        languageRanking[name].rank,
        languageRanking[name].language
      );
    }
  };
};
