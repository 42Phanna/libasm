bits 64

section .text
    global ft_write

ft_write:
    ; Arguments :
    ; rdi = fd (descripteur de fichier)
    ; rsi = buffer (adresse du tampon)
    ; rdx = count (nombre d'octets à écrire)

    ; Appel système pour write (numéro 1)
    mov rax, 1          ; Numéro d'appel système pour write
    syscall             ; Effectuer l'appel système

    ; Gestion d'erreur : Si rax est négatif (erreur) ou égal à 0 (aucun octet écrit)
    test rax, rax       ; Fait en AND Binaire (vérifie si rax == 0 ou rax < 0) et stock le résultat dans le registre RFLAGS
    js handle_error     ; Si rax < 0 (erreur), aller à handle_error
    jz nothing_written  ; Si rax == 0 (rien écrit), aller à nothing_written

    ; Si on est ici, tout s'est bien passé
    ret

nothing_written:
    ; Gestion de l'absence d'écriture (rax == 0)
    ; Tu peux retourner une valeur spéciale ici pour indiquer qu'aucun octet n'a été écrit
    mov rax, -1         ; Retourner une valeur spéciale pour indiquer aucun octet écrit
    ret

handle_error:
    ; Gestion de l'erreur (rax < 0)
    ; Tu peux définir ici un code d'erreur spécifique
    mov rax, -2         ; Retourner un code d'erreur spécifique (par exemple -2)
    ret
