import NavButton from "@/components/buttons/NavButton";
import Checkbox from "@/components/Checkbox";

export default function Home() {
    
    return (
      <main className="flex flex-col items-center justify-between">
        <h1 className="text-center mb-3">Informed Consent of Study Participation</h1>
            <div className="px-5 flex justify-center">
                <div className="task-box mb-3 max-w-prose place-items-center px-5 border border-neutral-900">
                    <p>
                        Sie sind eingeladen, an der Online-Studie teilzunehmen, die die Informationsbeschaffung für die EU-Wahlen am 9. Juni 2024 untersucht. 
                        Die Studie wird von Felix Hornberger durchgeführt und von Dr. David Elsweiler von der Universität Regensburg betreut. 
                        Die Studie findet im Zeitraum vom 2024-06-03 bis 2024-06-09 statt. Bitte beachten Sie:
                    </p>
                    <p className="my-2">Please note:</p>
                    <div className="text-left">
                        <ul className="mb-2">
                            <li>- Ihre Teilnahme ist völlig freiwillig und kann jederzeit abgebrochen oder zurückgezogen werden.</li>
                            <li>- Sie haben keinen direkten Nutzen von der Teilnahme an der Studie (es sei denn, Sie erhalten 0,25 VP-Stunden als Student der Universität Regensburg), aber Sie unterstützen meine Arbeit und helfen, die Forschung auf diesem Gebiet voranzutreiben.</li>
                            <li>- Für die Bewertung erhebe ich einige grundlegende demografische Informationen (z. B. Alter, Geschlecht usw.)</li>
                            <li>- Während der Sitzung werden alle Anfragen und die entsprechenden Antworten, die in das System eingegeben werden, genauestens dokumentiert, einschließlich der Zeitstempel-Daten.</li>
                            <li>- Aufzeichnungen und personenbezogene Daten unterliegen den Richtlinien der General Data Protection Regulation (GDPR) und werden pseudoanonymisiert (mit einer verschlüsselten Nummer) gespeichert, ausgewertet und ggf. veröffentlicht, so dass ohne Angaben der Forscher keine Rückschlüsse auf einzelne Personen gezogen werden können.</li>
                        </ul>
                        <p className="font-normal">
                            Die Alternative zur Teilnahme an dieser Studie ist die Nichtteilnahme.
                            Wenn Sie Fragen, Bedenken oder Beschwerden bezüglich des Einwilligungsverfahrens dieser Studie oder Ihrer Rechte als Versuchsperson haben, wenden Sie sich bitte an Dr. David Elsweiler. 
                            Bitte lesen Sie die folgenden Informationen sorgfältig durch und nehmen Sie sich die Zeit, die Sie benötigen.</p>
                        <h2 className="text-center my-2">1. Zweck und Ziel dieser Forschung</h2>
                        <p className="font-normal">
                            In dieser Studie soll untersucht werden, wie generative Information-Retrieval-Systeme für die Informationsbeschaffung zu Wahlen genutzt werden können. 
                            Das Ziel dieser Studie ist es, zu analysieren, wie sich die Generative Information Retrieval Systeme und die Antworten, die sie liefern, auf die Art und Weise auswirken, wie sich die Menschen mit Informationen über Parteiprogramme auseinandersetzen und wie viel politisches Wissen über die EU-Wahlen am 9. Juni 2024 gewonnen wird. 
                            Ihre Teilnahme wird mir helfen, dieses Forschungsziel zu erreichen. 
                            Die Ergebnisse dieser Forschung können auf wissenschaftlichen oder professionellen Tagungen präsentiert oder in wissenschaftlichen Proceedings und Zeitschriften veröffentlicht werden.</p>
                        <h2 className="text-center my-2">2. Teilnahme an der Studie</h2>
                        <p className="font-normal">
                            Ihre Teilnahme an dieser Online-Studie ist völlig freiwillig und kann jederzeit abgebrochen oder zurückgezogen werden. 
                            Sie können sich jederzeit weigern, Fragen zu beantworten oder mit der Studie fortzufahren, wenn Sie sich in irgendeiner Weise unwohl fühlen. 
                            Sie können Ihre Teilnahme jederzeit ohne Angabe von Gründen beenden oder zurückziehen. Wir behalten uns jedoch das Recht vor, Sie von der Studie auszuschließen (z. B. bei ungültigen Versuchen oder wenn die Fortsetzung der Studie negative Auswirkungen auf Ihr Wohlbefinden oder die Geräte haben könnte). 
                            Eine wiederholte Teilnahme an der Studie ist nicht zulässig.
                        </p>
                        <h2 className="text-center my-2">3. Verfahren der Studie</h2>
                        <p className="font-normal my-2">Nach der Bestätigung dieser informierten Zustimmung wird das Verfahren wie folgt durchgeführt:</p>
                        <ul className="mb-2">
                            <li>1. Zu Beginn wird Ihnen eine kurze Einführung in die Studie gegeben.</li>
                            <li>2. Sie werden abgefragt, um Ihr Wissen über die EU-Wahlen und das Europäische Parlament zu testen.</li>
                            <li>3. Sie werden gebeten, eine Partei auszuwählen, über die Sie mehr erfahren möchten. </li>
                            <li>4. Sie werden einer Lernmethode zugewiesen. Dies erfolgt entweder über ein Chat-basiertes System [Claude 3 Haiku] oder das Parteiprogramm als PDF-Dokument. 
                                Ihr Gespräch mit dem Chatbot wird an Drittanbieter weitergeleitet. 
                                Geben Sie daher im Chat keine persönlichen Daten preis und teilen Sie keine Informationen, die Sie nicht mit anderen Personen besprechen würden. 
                                Nur Chat-Daten werden an Drittanbieter weitergegeben. 
                                Alle anderen Daten, wie demografische Daten und beantwortete Fragen, werden nicht außerhalb des Forschungsteams weitergegeben.</li>
                            <li>5. Nach Abschluss der Aufgabe erhalten Sie einen kurzen Fragebogen, um zu ermitteln, was Sie gelernt haben und ob sich dies auf Ihre Wahlabsichten auswirken wird.</li>
                            <li>6. Abschließend werden Sie gebeten, einige demografische Angaben zu machen (Alter, Geschlecht, Bildungsstand, Beruf, politische Orientierung)</li>

                        </ul>
                        <p className="font-normal my-2">Die Bestätigung der Teilnahme an dieser Studie erhalten Sie direkt von den Forschern.</p>
                        <h2 className="text-center my-2">4. Risiken und Vorteile</h2>
                        <p className="font-normal">
                            In der Online-Studie sind Sie keinem unmittelbaren Risiko oder keiner Gefahr ausgesetzt. 
                            Wie bei allen Computersystemen, auf denen Daten verarbeitet werden, besteht trotz Sicherheitsmaßnahmen ein geringes Risiko, dass Daten verloren gehen oder vertrauliche oder persönliche Informationen offengelegt werden. 
                            Sie haben keinen direkten Nutzen von der Teilnahme an der Studie (außer Sie erhalten als Student der Universität Regensburg 0,25 VP-Stunden), aber Sie unterstützen meine Arbeit und helfen mir, die Forschung in diesem Bereich voranzutreibe</p>
                        <h2 className="text-center my-2">5. Datenschutz und Vertraulichkeit</h2>
                        <p className="font-normal">
                            In dieser Studie werden persönliche und personenbezogene Daten für unsere Forschung erhoben. 
                            Die Verwendung personenbezogener oder personenbezogener Daten unterliegt der Datenschutz-Grundverordnung (DSGVO) der Europäischen Union (EU) und wird gemäß der DSGVO gehandhabt. 
                            Das bedeutet, dass Sie die in dieser Studie erhobenen Daten einsehen, korrigieren, deren Verarbeitung einschränken und löschen lassen können. 
                            Ihre Angaben werden nur mit Ihrer Zustimmung in der Studie registriert. Wir planen, die Ergebnisse dieser und anderer Forschungsstudien in wissenschaftlichen Artikeln oder anderen Medien zu veröffentlichen. 
                            Ihre Daten werden so lange gespeichert, bis Sie sich an die Forscher wenden, um Ihre Daten vernichten oder löschen zu lassen. Der Zugriff auf die Rohdaten der Studie erfolgt verschlüsselt und passwortgeschützt während der Analyse und nur für die Autoren, Kollegen und Forscher, die an dieser Forschung mitarbeiten. Im Rahmen der Forschungsarbeit werden die Daten mithilfe von codierten Identifikationsnummern anonymisiert und dann der Öffentlichkeit zugänglich gemacht, wobei ohne die Informationen des Forschers keine Rückschlüsse auf einzelne Personen möglich sind. Sobald das Material öffentlich zugänglich ist, kann die Weitergabe der Daten nicht mehr rückgängig gemacht werden. 
                            Da keine Kontaktdaten (z. B. E-Mail-Adressen) erfasst werden, können die Forscher die Teilnehmer nicht über weitere Details der Studie oder über einen möglichen Verstoß gegen die Vertraulichkeit der Daten informieren.</p>
                        <h2 className="text-center my-2">6. Identifizierung der Forscher</h2>
                        <p className="font-normal mb-2">Wenn Sie Fragen oder Bedenken bezüglich der Studie haben, wenden Sie sich bitte an:</p>
                        <p className="font-normal">Forscher:</p>
                        <ul className="mb-2">
                            <li>Felix Hornberger (felix.hornberger@stud.uni-regensburg.de)</li>
                        </ul>
                        <p className="font-normal">Hauptprüfer:</p>
                        <ul className="mb-2">
                            <li>Dr. David Elsweiler (david.elsweiler@ur.de)</li>
                            <li>Universität Regensburg Universitätsstr. 31 93053 Regensburg, Germany</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Checkbox checkboxText="Ich akzeptiere die Bedingungen"/>
      </main>
    );
  }
  