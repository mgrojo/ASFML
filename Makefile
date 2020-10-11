.PHONY : all doc

all:
	gprbuild -j0 -P asfml.gpr

doc:
	gnatdoc -P asfml.gpr
