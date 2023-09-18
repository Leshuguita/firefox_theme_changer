#!/usr/bin/python

import json
import os
import sys
import struct
import time

def encodeMessage(messageContent):
    encodedContent = json.dumps(messageContent, separators=(',', ':')).encode('utf-8')
    encodedLength = struct.pack('@I', len(encodedContent))
    return {'length': encodedLength, 'content': encodedContent}

# Send an encoded message to stdout
def sendMessage(encodedMessage):
    sys.stdout.buffer.write(encodedMessage['length'])
    sys.stdout.buffer.write(encodedMessage['content'])
    sys.stdout.buffer.flush()

while True:
	if os.path.isfile("./firefox_theme"):
		file = open("./firefox_theme" ,"r")
		theme = file.read().strip()
		encoded = encodeMessage(theme)
		sendMessage(encoded)
		os.remove("./firefox_theme")
	time.sleep(0.1)