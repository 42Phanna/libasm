bits 64

; int strcmp(const char *s1, const char *s2)

section .text
    global ft_strcmp

ft_strcmp:
    xor rbx, rbx
    xor rcx, rcx

; compare label is used to compare rsi (s1) and rdi (s2)
; first we check if we are at the EOL ('\0')
; second time, we check rsi and rdi,
; we use bl register like tmp register
; as long as rsi and rdi are the same, we call compare

compare:
    cmp byte[rsi + rcx], 0
    je return ; EOL of [rdi]
    cmp byte[rdi + rcx], 0
    je return ; EOL of [rsi]
    mov bl, byte[rsi + rcx]
    cmp byte[rdi + rcx], bl
    jne return ; value at [rsi] != value at [rdi]
    inc rcx
    jmp compare

; we return if:
;   - foundd EOL of [rdi] OR [rsi]
;   - found a diff between [rdi] AND [rsi] 

return:
    xor rax, rax
    mov al, byte[rdi + rcx]
    sub rax, rbx
    ret
