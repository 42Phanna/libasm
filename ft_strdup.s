bits 64

section .text
    extern malloc       ; On déclare malloc comme une fonction externe
    global ft_strdup

ft_strdup:
    ; Argument : rdi = s (la chaîne source)

    ; Calculer la longueur de la chaîne source
    xor rcx, rcx        ; rcx = 0 (compteur)
find_length:
    cmp byte [rdi + rcx], 0
    je length_found
    inc rcx
    jmp find_length

length_found:
    ; rcx contient la longueur de la chaîne source

    ; Allouer de la mémoire pour la nouvelle chaîne (longueur + 1 pour le '\0')
    mov rdi, rcx        ; Taille de la chaîne source dans rdi
    inc rdi             ; Ajouter 1 pour le caractère nul
    call malloc         ; Appeler malloc pour allouer de la mémoire
    test rax, rax       ; Vérifier si malloc a échoué (rax == NULL)
    je allocation_failed; Si malloc échoue, aller à l'étiquette d'erreur

    ; rax contient l'adresse de la mémoire allouée, on la stocke dans rbx
    mov rbx, rax        ; Stocker l'adresse de la mémoire allouée dans rbx (destination)

    ; Copier la chaîne source dans la nouvelle chaîne
    xor rcx, rcx        ; rcx = 0 (index)
copy_loop:
    cmp byte [rdi + rcx], 0
    je copy_done
    mov byte [rbx + rcx], byte [rdi + rcx]
    inc rcx
    jmp copy_loop

copy_done:
    mov byte [rbx + rcx], 0 ; Ajouter le caractère nul à la fin

    ; Retourner l'adresse de la nouvelle chaîne
    mov rax, rbx        ; Adresse de la nouvelle chaîne dans rax
    ret

allocation_failed:
    ; Gérer l'erreur d'allocation ici (retourner NULL, par exemple)
    xor rax, rax        ; Retourner NULL si malloc échoue (rax = 0)
    ret
