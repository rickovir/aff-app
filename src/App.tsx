import { useState } from "react";
import "./App.css";

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Yg bener?",
      "Jangan dong :(",
      "Yakin enggak ?",
      "Are you sure?",
      "Really sure?",
      "Coba lagi!",
      "Kesempatan terakhir nih!",
      "Cantik, kamu yakin?",
      "Surely not?",
      "Kasih aku kesempatan lagi!",
      "You might regret this!",
      "Kamu beneran yakin nih?",
      "Maukan aku perjuangkan mati-matian?",
      "Ini bukan keputusan tepat lho!",
      "Pliss buka hati kamuu :'(!",
      "Don't be so cold!",
      "Berubah pikiran ya?",
      "Mau pikir ulang ?",
      "Apakah ini jawaban terakhir kamu?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="surprise-wrapper">
      {yesPressed ? (
        <>
          <img src="https://i.pinimg.com/originals/84/78/a1/8478a1b6c9829a3c5ac71210bdae59df.gif" />
          <div className="ok-text text-4xl font-bold my-4">
            Ok yay, gas ke KUA!!!
          </div>
        </>
      ) : (
        <>
          <img
            className="mydoll"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="question-text">
            Afifah
            <br />
            Will you be mine ?
          </h1>
          <div>
            <button
              className={`yes-button`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="no-button">
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
