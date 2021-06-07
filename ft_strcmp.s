bits 64

; int strcmp(const char *s1, const char *s2)

section .text
    global ft_strcmp

ft_strcmp:
    xor rcx, rcx
    xor rax, rax

; compare label is used to compare rsi (s1) and rdi (s2)
; first we check if we are at the EOL ('\0')
; second time, we check rsi and rdi,
; we use bl register like tmp register
; as long as rsi and rdi are the same, we call compare

compare:
    cmp byte[rdi + rcx], 0
    je return
    cmp byte[rsi + rcx], 0
    je return
    mov bl, byte[rsi + rcx]
    cmp byte[rdi + rcx], bl
    jnz return
    inc rcx
    jmp compare

return:
    mov bl, byte[rdi + rcx]
    mov dl, byte[rsi + rcx]
    movzx rax, byte[rdi + rcx]
    movzx rdx, byte[rsi + rcx]
    sub rax, rdx
    ret
