import React, { useState } from 'react';
import donnees from './data/data.json';
import ReactMarkdown from 'react-markdown';
function App() {
  const [moduleSelectionne, setModuleSelectionne] = useState(null);
  const [pointsUtilisateur, setPointsUtilisateur] = useState(0);
  // Nouveau : pour savoir si on affiche le cours ou le quiz
  const [enModeQuiz, setEnModeQuiz] = useState(false); 

  const formations = donnees.formations;

  // Fonction pour changer de module proprement
  const choisirModule = (mod) => {
    setModuleSelectionne(mod);
    setEnModeQuiz(false); // On remet toujours en mode "lecture" quand on change de module
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '20px' }}>
      
      {/* BARRE DE SCORE */}
      <nav style={{ backgroundColor: '#2c3e50', color: 'white', padding: '15px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        <h2 style={{ margin: 0 }}>🎓 Ma Formation</h2>
        <div style={{ fontSize: '1.2em', fontWeight: 'bold', backgroundColor: '#27ae60', padding: '5px 15px', borderRadius: '20px' }}>
          Score : {pointsUtilisateur} pts
        </div>
      </nav>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        
        {/* COLONNE GAUCHE : MENU */}
        <section>
          {formations.map((f) => (
            <div key={f.id} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', marginBottom: '20px' }}>
              <h3>{f.nom}</h3>
              {f.niveaux.map((niv) => (
                <div key={niv.id}>
                  <p><strong>Niveau {niv.nom}</strong></p>
                  {niv.modules.map((mod) => (
                    <button 
                      key={mod.id}
                      onClick={() => choisirModule(mod)}
                      style={{ width: '100%', textAlign: 'left', padding: '10px', marginBottom: '5px', cursor: 'pointer', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: moduleSelectionne?.id === mod.id ? '#e8f4fd' : 'white' }}
                    >
                      {mod.titre}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </section>

        {/* COLONNE DROITE : CONTENU DYNAMIQUE */}
        <section style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          {moduleSelectionne ? (
            <div>
              <h2>{moduleSelectionne.titre}</h2>
              <hr />

              {!enModeQuiz ? (
  /* ÉTAPE 1 : AFFICHAGE DU COURS */
  <div>
    {/* On utilise ReactMarkdown pour transformer le texte brut en HTML propre */}
    <div className="contenu-cours" style={{ lineHeight: '1.7', fontSize: '1.1em', color: '#2c3e50' }}>
      <ReactMarkdown>{moduleSelectionne.cours}</ReactMarkdown>
    </div>

    <button 
      onClick={() => setEnModeQuiz(true)}
      style={{ 
        marginTop: '30px', 
        padding: '15px 30px', 
        backgroundColor: '#3498db', 
        color: 'white', 
        border: 'none', 
        borderRadius: '8px', 
        cursor: 'pointer', 
        fontWeight: 'bold',
        fontSize: '1em',
        boxShadow: '0 4px 6px rgba(52, 152, 219, 0.2)'
      }}
    >
      J'ai compris, passer au quiz ! ➔
    </button>
  </div>
              ) : (
                /* ÉTAPE 2 : AFFICHAGE DU QUIZ */
                <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', borderLeft: '5px solid #27ae60' }}>
                  <h3>📝 Quiz Rapide</h3>
                  <p><strong>Question :</strong> {moduleSelectionne.quiz.question}</p>
                  
                  {moduleSelectionne.quiz.options.map((opt, index) => (
                    <button 
                      key={index}
                      onClick={() => {
                        if(index === moduleSelectionne.quiz.reponse_correcte) {
                          alert("Félicitations ! +" + moduleSelectionne.points_module + " points");
                          setPointsUtilisateur(prev => prev + moduleSelectionne.points_module);
                          setEnModeQuiz(false); // On peut repasser en mode cours ou proposer le module suivant
                          setModuleSelectionne(null); // Optionnel : ferme le module après réussite
                        } else {
                          alert("Faux ! Relis bien le cours.");
                          setEnModeQuiz(false); // On le renvoie vers le cours pour relire
                        }
                      }}
                      style={{ display: 'block', width: '100%', padding: '12px', margin: '10px 0', cursor: 'pointer', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: 'white' }}
                    >
                      {opt}
                    </button>
                  ))}
                  <button onClick={() => setEnModeQuiz(false)} style={{ background: 'none', border: 'none', color: '#7f8c8d', cursor: 'pointer', marginTop: '10px' }}>
                    « Retourner lire le cours
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div style={{ textAlign: 'center', color: '#95a5a6', marginTop: '50px' }}>
              <h3>Sélectionnez un module pour commencer</h3>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}

export default App;