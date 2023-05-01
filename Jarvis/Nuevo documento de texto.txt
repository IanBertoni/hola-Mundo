import speech_recognition as sr
import pyttsx3
import pywhatkit
import datetime
import wikipedia
import pyjokes

listener = sr.Recognizer()
engine = pyttsx3.init()

# Set the voice rate
engine.setProperty('rate', 150)

# Adjust the energy threshold
with sr.Microphone() as source:
    listener.adjust_for_ambient_noise(source)

def talk(text):
    engine.say(text)
    engine.runAndWait()

def take_command():
    try:
        with sr.Microphone() as source:
            print('Escuchando...')
            voice = listener.listen(source)
            command = listener.recognize_google(voice, language='es-ES')
            command = command.lower()
            if 'jarvis' in command:
                command = command.replace('jarvis', '')
                print(command)
    except sr.UnknownValueError:
        command = ''
    except sr.RequestError:
        command = ''
    return command

def run_jarvis():
    command = take_command()
    if 'reproduce' in command:
        song = command.replace('reproduce', '')
        talk('Reproduciendo ' + song)
        pywhatkit.playonyt(song)
    elif 'hora' in command:
        time = datetime.datetime.now().strftime('%I:%M %p')
        talk('Son las ' + time)
    elif 'busca' in command:
        person = command.replace('busca', '')
        try:
            info = wikipedia.summary(person, 1)
            print(info)
            talk(info)
        except wikipedia.exceptions.DisambiguationError as e:
            talk('Hay varios resultados para esa búsqueda. Por favor, sé más específico.')
    elif 'chiste' in command:
        talk(pyjokes.get_joke())
    elif 'adiós' in command:
        talk('Hasta luego.')
        exit()
    else:
        talk('No entiendo lo que quieres decir. Por favor, repite el comando.')

while True:
    run_jarvis()