# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    ft_strcpy.s                                        :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: phanna <phanna@student.42.fr>              +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/06/07 11:41:06 by phanna            #+#    #+#              #
#    Updated: 2021/06/07 15:57:19 by phanna           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

bits 64

section .text

    global ft_strcpy

ft_strcpy:
    xor rcx, rcx

copy:
    cmp byte[rsi + rcx], 0
    je return
    mov bl, byte[rsi + rcx]
    mov byte[rdi + rcx], bl
    inc rcx
    jmp copy

return:
    mov byte[rsi + rcx], 0
    mov rax, rsi
    ret 
