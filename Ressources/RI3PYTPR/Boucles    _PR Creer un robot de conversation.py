# Creer un robot de conversation
import random

Debut = [ "Comment allez-vous ?" , "Pourquoi venez-vous me voir ?", "Comment s'est passé votre journée ?"]

RepPERE = [ "Comment va votre {0} ?", "La relation avec {0} vous pose-t-elle problème ?", "Pourquoi pensez-vous en ce moment à votre {0} ?"]

Questions = [ "Pourquoi me posez-vous cette question ?", "Oseriez-vous poser cette question à un humain ?", "Je ne peux malheureusement pas répondre à cette question"]

Vagues = [ "J'entends bien.", "Je sens une pointe de regret.", "Est-ce une bonne nouvelle ?", "Oui, c'est ça le problème.",  "Pensez-vous ce que vous dites ?", "Hum… Il se peut."]

k = random.randint(0,len(Debut)-1)
print("@@ ",Debut[k])


for i in range(10):
    phrase = input()

    # test sur le mot clef

    motclefs = ["père","mère","copain", "copine", "maman", "papa", "ami", "amie"]
    found = ""
    for motc in motclefs :
       if phrase.find(motc) > 0 :
           found = motc

    if len(found) > 0 :
        k = random.randint(0,len(RepPERE)-1)
        reponse = RepPERE[k]
        print("@@ ",reponse.format(found))

    else :
        # est-ce une question ?

        if phrase.find("?") > 0 :
            k = random.randint(0,len(Questions)-1)
            print("@@ ",questions[k])

        else :
            # vite une phrase vague :
            k = random.randint(0,len(Vagues)-1)
            print("@@ ",Vagues[k])
