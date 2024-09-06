bits 64

section .text
    global ft_read

ft_read:
    ; Arguments :
    ; rdi = fd (descripteur de fichier)
    ; rsi = buffer (adresse du tampon)
    ; rdx = count (nombre d'octets à lire)

    ; Appel système pour read (numéro 0)
    mov rax, 0          ; Numéro d'appel système pour read
    syscall             ; Effectuer l'appel système

    ; Gestion d'erreur : Si rax est négatif (erreur)
    test rax, rax       ; Tester rax (vérifie si rax == 0 ou rax < 0)
    js handle_error     ; Si rax < 0 (erreur), aller à handle_error
    jz eof              ; Si rax == 0 (fin de fichier), aller à eof

    ; Si tout s'est bien passé, retourner le nombre d'octets lus
    ret

eof:
    ; Gestion de la fin de fichier (rax == 0)
    mov rax, 0          ; Retourner 0 pour indiquer la fin de fichier
    ret

handle_error:
    ; Gestion de l'erreur (rax < 0)
    ; Tu peux définir ici un code d'erreur spécifique
    mov rax, -1         ; Retourner un code d'erreur spécifique (par exemple -1)
    ret
