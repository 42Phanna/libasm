bits 64

section .data
    string db "Hello"

section .text
    global  _start    

_start:
    mov rbx, string
    mov rdi, string
    mov rsi, string
    xor rbx, rbx
    mov bl, byte[rdi]
    mov dl, byte[rsi]

_return:
    mov rax, 60 ; Call of exit syscall
	mov rdi, 1
	syscall
