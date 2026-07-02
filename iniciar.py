import subprocess
import sys
import time
import webbrowser
import urllib.request
import os

URL = "http://localhost:3000"
PROJ = os.path.dirname(os.path.abspath(__file__))

print("Iniciando servidor CoberSteel...")
proc = subprocess.Popen(
    ["npm", "run", "dev"],
    cwd=PROJ,
    shell=True,
)

print("Aguardando servidor ficar pronto...", end="", flush=True)
for _ in range(60):
    try:
        urllib.request.urlopen(URL, timeout=1)
        print(" pronto!")
        break
    except Exception:
        print(".", end="", flush=True)
        time.sleep(1)
else:
    print("\nServidor nao respondeu em 60s. Verifique erros acima.")
    proc.terminate()
    sys.exit(1)

print(f"Abrindo {URL} no navegador...")
webbrowser.open(URL)

print("Servidor rodando. Feche esta janela para parar.")
proc.wait()
