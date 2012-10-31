#
# Makefile for ASFML
# Windows 32 version
#

# Some compile constants

ADA_MAKE ?= gnatmake -gnat95
ADA_MAKE_FLAGS ?= -g #-gnatwX

# linking and include directories

INC_DIR ?= ../../include
LIB_DIR ?= ../../lib

# compile command

COMPILE_CMD ?= $(ADA_MAKE) $(ADA_MAKE_FLAGS)

# include command

INCS_CMD ?= -I$(INC_DIR)

# libraries command

LIBS_CMD ?= -largs -L$(LIB_DIR)

# linked libraries

LINK_LIBS ?= -lcsfml-network-s -lcsfml-audio-s -lcsfml-graphics-s -lcsfml-window-s -lcsfml-system-s -lsfml-network-s -lsfml-audio-s -lsfml-graphics-s -lsfml-window-s -lsfml-system-s -lstdc++ -lglu32 -lopengl32

# build

main:
	$(COMPILE_CMD) main.adb $(INCS_CMD) $(LIBS_CMD) $(LINK_LIBS)
	
# run

run:
	start main.exe

# pretty print

pp:
	gnatpp -i3 -A1 -A2 -A3 -A4 -A5 -aU -c1 -cl2 -kL -l1 -M256 -nD -pM -rnb main.adb -cargs $(INCS_CMD)
	
# clean up

clean:
	@rm -f *.o *.ali b~*

zap:
	@rm -f *.o *.ali b~* main.exe
