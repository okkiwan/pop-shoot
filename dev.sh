#!/usr/bin/env bash

# create session & windows
SESSION='POP'
tmux new-session -d -s $SESSION
tmux new-window -t $SESSION

# send appropriate keys to each window
tmux send-keys -t $SESSION:0 'cd .. && http-server' C-m
tmux send-keys -t $SESSION:1 'nvim' C-m

# attach
tmux a -t $SESSION
